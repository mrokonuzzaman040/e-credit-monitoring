import React from 'react';

const Register = () => {
    return (

        <div class="bg-gray-100 dark:bg-gray-900">
            <div class="w-full max-w-3xl mx-auto p-8">
                <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
                    <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Checkout</h1>

                    <div class="mb-6">
                        <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">Shipping Address</h2>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label name="first_name" class="block text-gray-700 dark:text-white mb-1">First Name</label>
                                <input type="text" id="first_name" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                            </div>
                            <div>
                                <label name="last_name" class="block text-gray-700 dark:text-white mb-1">Last Name</label>
                                <input type="text" id="last_name" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                            </div>
                        </div>

                        <div class="mt-4">
                            <label name="address" class="block text-gray-700 dark:text-white mb-1">Address</label>
                            <input type="text" id="address" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                        </div>

                        <div class="mt-4">
                            <label name="city" class="block text-gray-700 dark:text-white mb-1">City</label>
                            <input type="text" id="city" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                        </div>

                        <div class="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label name="state" class="block text-gray-700 dark:text-white mb-1">State</label>
                                <input type="text" id="state" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                            </div>
                            <div>
                                <label name="zip" class="block text-gray-700 dark:text-white mb-1">ZIP Code</label>
                                <input type="text" id="zip" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                            </div>
                        </div>
                    </div>


                    <div>
                        <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">Payment Innamemation</h2>
                        <div class="mt-4">
                            <label name="card_number" class="block text-gray-700 dark:text-white mb-1">Card Number</label>
                            <input type="text" id="card_number" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                        </div>

                        <div class="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label name="exp_date" class="block text-gray-700 dark:text-white mb-1">Expiration Date</label>
                                <input type="text" id="exp_date" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                            </div>
                            <div>
                                <label name="cvv" class="block text-gray-700 dark:text-white mb-1">CVV</label>
                                <input type="text" id="cvv" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 flex justify-end">
                        <button class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Place Order</button>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Register;