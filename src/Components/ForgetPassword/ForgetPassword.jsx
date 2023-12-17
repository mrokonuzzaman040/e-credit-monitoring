import React from 'react';
import AuthProvider from '../../Provider/AuthProvider/AuthProvider';

const ForgetPassword = () => {
    const { forgetPassword } = AuthProvider();

    const handleForgetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        forgetPassword(email)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className="text-center">
                <h1>Forget Password</h1>
            </div>
            <div className="">
                <form className="w-full max-w-lg mx-auto my-10">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Email
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                type="email" name='email' placeholder="Enter your email" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                            <button onSubmit={handleForgetPassword()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Send Email
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default ForgetPassword;