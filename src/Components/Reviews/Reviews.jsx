import { useEffect } from "react";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";

<<<<<<< HEAD

=======
>>>>>>> 187eeb0de396efe2b24d344230efde8e2cf740f0
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
<<<<<<< HEAD
        <section className="my-20">
            <Swiper className="mySwiper">
                {reviews.map(review => (
                    <SwiperSlide key={review._id}>
                        <div className="flex flex-col justify-center items-center mx-24 my-16 gap-3">
                            <div className="">
                                <img className='w-[80px] h-[80px] rounded-full' src={review.image ? review.image : user} alt="" />
                            </div>
=======
        <section>
            <Swiper>
                {reviews.map(review => (
                    <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center mx-24 my-16">
>>>>>>> 187eeb0de396efe2b24d344230efde8e2cf740f0
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
<<<<<<< HEAD
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.user_name ? review.user_name : 'User'}</h3>
=======
                            <img className='w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={review.user_photo ? review.user_photo : user} alt="" />
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.user_name}</h3>
>>>>>>> 187eeb0de396efe2b24d344230efde8e2cf740f0
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Review;