import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    return (
        <div>

            <div className="">
                <h1 className="text-3xl text-white font-bold text-center mb-5 ">Subscribe Before Start</h1>
                <form action="">
                    <p>Please enter your Payment Information</p>
                    <CardElement />
                    <button className="bg-indigo-500 text-white p-2 rounded-xl mt-5">Pay</button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;