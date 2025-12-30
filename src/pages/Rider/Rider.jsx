import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { useLoaderData } from 'react-router';

const Rider = () => {
    const {
        register,
        handleSubmit,
        control,
    } = useForm();
    const { user } = useAuth();
    
    // FIX 1: Default to empty array if useLoaderData returns undefined
    const serviceCenters = useLoaderData() || []; 

    // FIX 2: Use Optional Chaining (?.) just in case
    const regionsDuplicate = serviceCenters?.map(c => c.region) || [];

    const regions = [...new Set(regionsDuplicate)];

    const districtsByRegion = (region) => {
        // FIX 3: Safety check inside the helper function
        if (!serviceCenters || !Array.isArray(serviceCenters)) return [];
        
        const regionDistricts = serviceCenters.filter(c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }

    const riderRegion = useWatch({ control, name: 'region' });

    const handleRiderApplication = data => {
        console.log(data);
        // ... your axios logic

       

    }
    
    // FIX 4: Optional Loading State
    // If you prefer to show a spinner while data is missing:
    if(!serviceCenters.length && !regions.length) {
        return <div className="p-10 text-center">Loading Service Centers...</div>
    }

    return (
        <div>
            <h2 className="text-4xl text-primary">Be a Rider</h2>
            <form onSubmit={handleSubmit(handleRiderApplication)} className='mt-12 p-4 text-black'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    
                    <fieldset className="fieldset">
                        <h4 className="text-2xl font-semibold">Rider Details</h4>
                        
                        <label className="label">Rider Name</label>
                        <input type="text" {...register('name')}
                            defaultValue={user?.displayName}
                            className="input w-full" placeholder="Sender Name" />

                        <label className="label">Email</label>
                        <input type="text" {...register('email')}
                            defaultValue={user?.email}
                            className="input w-full" placeholder="Sender Email" />

                        {/* Region Select */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Regions</legend>
                            <select {...register('region')} defaultValue="Pick a region" className="select">
                                <option disabled>Pick a region</option>
                                {
                                    regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                }
                            </select>
                        </fieldset>

                        {/* District Select */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Districts</legend>
                            <select {...register('district')} defaultValue="Pick a district" className="select">
                                <option disabled>Pick a district</option>
                                {
                                    /* FIX 5: Handle case where region isn't selected yet */
                                    riderRegion ? (
                                        districtsByRegion(riderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                                    ) : (
                                        <option disabled>Select a Region first</option>
                                    )
                                }
                            </select>
                        </fieldset>

                        <label className="label mt-4">Your Address</label>
                        <input type="text" {...register('address')} className="input w-full" placeholder="Sender Address" />

                    </fieldset>

                    <fieldset className="fieldset">
                        <h4 className="text-2xl font-semibold">More Details</h4>
                        <label className="label">Driving License</label>
                        <input type="text" {...register('license')} className="input w-full" placeholder="Driving License" />

                        <label className="label">NID</label>
                        <input type="text" {...register('nid')} className="input w-full" placeholder="NID" />

                        <label className="label mt-4">BIKE</label>
                        <input type="text" {...register('bike')} className="input w-full" placeholder="Bike" />
                    </fieldset>
                </div>
                <input type="submit" className='btn btn-primary mt-8 text-black' value="Apply as a Rider" />
            </form>
        </div>
    );
};

export default Rider;