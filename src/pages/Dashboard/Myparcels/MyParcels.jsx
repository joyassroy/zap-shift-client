import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: parcels = [],refetch } = useQuery({
        queryKey: ['my-parcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        }
    });
    const handlePayment=async(parcel)=>{
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName
        }

        const res = await axiosSecure.post('/payment-checkout-session', paymentInfo);

        console.log(res.data);
        
        window.location.href = res.data.url;
    }
    const handleParcelDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/parcels/${id}`).then(res=>console.log(res.data));
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your parcel has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <div>
            <h2>ALl of my parcels:{parcels.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment</th>
                            <th>Delivery Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{parcel.parcelName}</td>
                                
                                <td>{parcel.cost}</td>
                                <td>
                                    {

                                        parcel.paymentStatus==='paid'?<span className='text-green-400'>Paid</span>: <button onClick={()=>handlePayment(parcel)} className="btn btn-primary text-black">Pay</button>

                                    }
                                    </td>
                                <td>{parcel.deliveryStatus}</td>
                                <td><button className='btn btn-square hover:btn-primary mx-2'><FaEdit /></button>
                                    <button className='btn btn-square hover:btn-primary mx-2'><FaMagnifyingGlass /></button>
                                    <button onClick={() => handleParcelDelete(parcel._id)} className='btn btn-square hover:btn-primary mx-2'><FaTrashAlt /></button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;