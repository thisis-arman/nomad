// CheckoutForm.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setPaymentProcessing(true);

        const { error, paymentIntent } = await stripe.confirmCardPayment('{clientSecret}', {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (error) {
            setError(error.message);
            setPaymentProcessing(false);
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            setError(null);
            setPaymentSuccess(true);
            setPaymentProcessing(false);
        }
    };

    return (
        <Card className='m-8 shadow-sm w-1/2 mx-auto p-4 rounded-md'>
            <form onSubmit={handleSubmit} className='  '>
                <CardElement className='py-4 border-2 text-black' />
                <Button className='bg-green-600 hover:bg-green-700  w-1/2 mx-auto flex justify-center items-center  my-2 ' type="submit" disabled={!stripe || paymentProcessing}>
                 
                </Button>
                {error && <div>{error}</div>}
                {paymentSuccess && <div>Payment successful!</div>}
            </form>
       </Card>
    );
};

export default CheckoutForm;
