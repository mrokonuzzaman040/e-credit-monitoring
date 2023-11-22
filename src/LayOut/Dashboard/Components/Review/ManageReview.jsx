import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const ManageReview = () => {

    const axiosPublic = useAxiosPublic();
    const { data: reviewData = [], refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews');
            return res.data;
        }
    })

    // handel delete
    const handelDelete = async (id) => {
        try {
            await axiosPublic.delete(`/reviews/${id}`);
            refetch();
        } catch (error) {
            console.log(error);
        }
    }

    // handel update
    const handelUpdate = async (id) => {
        try {
            await axiosPublic.put(`/reviews/${id}`);
            refetch();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Manage Review</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Review</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviewData.map(review => {
                            return (
                                <tr key={review._id}>
                                    <td>{review.name}</td>
                                    <td>{review.details}</td>
                                    <td>{review.rating}</td>
                                    <td>
                                        <div className="flex gap-2">
                                            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Update</button>
                                            <button onClick={() => handelDelete(review._id)} className="btn">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ManageReview;