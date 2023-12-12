import { useEffect } from "react";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

import user_img from '../../assets/user.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// Import Rating styles
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Review = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/reviews')
            .then(res => {
                setReviews(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
        , [axiosPublic]);

    return (
        <>
            <section className="my-20">
                <Swiper className="mySwiper">
                    {reviews.map(review => (
                        <SwiperSlide key={review._id}>
                            <div className="flex flex-col justify-center items-center mx-24 my-16 gap-3">
                                <div className="">
                                    <img className='w-[80px] h-[80px] rounded-full' src={review.image ? review.image : user_img} alt="" />
                                </div>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="py-8">{review.details}</p>
                                <h3 className="text-2xl text-orange-400">{review.name ? review.name : 'User'}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>

    );
};

export default Review;