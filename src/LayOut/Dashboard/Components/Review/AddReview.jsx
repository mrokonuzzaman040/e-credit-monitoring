import React, { useState } from 'react';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";

// Image Hosting
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddReview = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();
    const [image, setImage] = useState();

    const addReview = async (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(image_hosting_api, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                setImage(data.data.display_url);
            })
            .catch(error => {
                console.error(error)
            })

        const name = data.name;
        const details = data.details;
        const rating = data.rating;
        try {
            const res = await axiosPublic.post('/reviews', { name, details, rating, image });
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
            <form onSubmit={handleSubmit(addReview)} className="">
                <p className="py-4">Name: <input {...register('name', { required: true })} name='name' type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                </p>

                <p className="py-4">Details: <textarea {...register('details', { required: true })} name='details' type="text" placeholder="Type here" className="textarea textarea-bordered w-full max-w-full" />
                </p>

                <p className="py-4">Rating: <input {...register('rating', { required: true })} name='rating' type="number" maxLength="1" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                </p>

                <p className="py-4"> Image: <input {...register('image',)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" type="file" /> </p>

                <div className="divider"></div>
                <div className="flex justify-end">
                    <button className='btn w-auto'>Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;