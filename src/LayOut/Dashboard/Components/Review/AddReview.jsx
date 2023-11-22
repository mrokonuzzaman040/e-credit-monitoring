import React from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AddReview = () => {
    const axiosPublic = useAxiosPublic();

    const addReview = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const details = e.target.details.value;
        const rating = e.target.rating.value;

        try {
            const res = await axiosPublic.post('/reviews', { name, details, rating });
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Review Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();

                    }
                })
                    .catch((error) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                        })
                    })

                e.target.reset();


            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="">
                <h2>Add Reviews</h2>
            </div>
            <div className="divider"></div>
            <form onSubmit={addReview} className="">
                <p className="py-4">Name: <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                </p>

                <p className="py-4">Details: <textarea name='details' type="text" placeholder="Type here" className="textarea textarea-bordered w-full max-w-full" />
                </p>

                <p className="py-4">Rating: <input name='rating' type="number" maxLength="1" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                </p>

                <div className="divider"></div>
                <div className="flex justify-end">
                    <button className='btn w-auto'>Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;