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
                                        <Link to={`editReviews/${review._id}`} className='btn'>Edit</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageReview;