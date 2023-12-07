import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const CheckoutForm = () => {
    const stripe = useStripe();
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const [error, setError] = useState('');
    const axiosSecure = useAxiosSecure();

    const elements = useElements();
    const navigate = useNavigate();
    const { user } = useAuth();

    const totalPrice = 25.49;

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })


        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    propertyId: data._id,
                    offerStatus: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment);
                if (res.data?.paymentResult?.insertedId) {
                    // const updateOffer = {
                    //     home_status: 'accepted'
                    // }
                    // const res = await publicApi.patch(`/offer_requests/afterPayement/${data._id}`, updateOffer);
                    // console.log(res);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Payment has been successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/boughtPropertys')
                }

            }
        }
    }

    return (
        <div className='flex flex-col text-center'>
            <p>Please Enter you Payment Information</p>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <p className="">Please enter your payment information</p>
                <CardElement className='bg-green-300 p-10'>
                </CardElement>
                <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;