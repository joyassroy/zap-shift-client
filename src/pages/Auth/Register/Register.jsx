import React from 'react';
import { useForm } from "react-hook-form"
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
const Register = () => {
    const { registerUser,updateUser } = useAuth();
    const location=useLocation();
    const navigate=useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegister = (data) => {
        console.log(data);
        const profileImg=data.photo[0];

        registerUser(data.email, data.password).then(res => {
            const formData=new FormData();
            formData.append('image',profileImg);
            const imgURL=`https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_host}`;
            axios.post(imgURL,formData)
            .then(res=>{
                console.log(res);
                const userProfile={
                    displayName:data.name,
                    photoURL:res.data.data.url

                }
                updateUser(userProfile).then(navigate(location.state || '/')).catch();
            })
        }).catch(error => {
            console.log(error);
        });
    }
    return (
        <div className="card bg-base-100 w-full mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-3xl text-center mt-[20px]">Welcome to ZapShift</h3>
            <form className='card-body' onSubmit={handleSubmit(handleRegister)}>
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" {...register('name', { required: true })} className="input" placeholder="Your Name" />
                    {errors.name?.type === 'required' && <p className='text-red-500'>Name is required</p>}
                    <label className="label">Photo</label>
                    <input type="file" {...register('photo', { required: true })} className="file-input" placeholder="Your Name" />
                    {errors.photo?.type === 'required' && <p className='text-red-500'>Your Photo</p>}
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
                    {errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', { required: true })} className="input" placeholder="Password" />
                    {errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                <p>Already Have an account to zapshift ? <Link to='/login' className='text-blue-400 underline'>Login here</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;