import { useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useEffect } from "react";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Step2 = () => {
    const location = useLocation();
    const stepOneData = location.state;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,}$/;
    const navigate = useNavigate();

    useEffect(() => {
        if (stepOneData === null) {
            navigate('/register')
        }
    }, [location]);

    const { createUser } = useContext(AuthContext)
    const email = stepOneData.email;

    const handelStep = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const create_password = e.target.create_password.value;
        const confirm_password = e.target.confirm_password.value;
        const seq = e.target.seq.value;
        const seq_answer = e.target.seq_answer.value;
        const card_number = e.target.card_number.value;
        const cvc = e.target.cvc.value;
        const exdate = e.target.exdate.value;

        const stepTwoData = {
            ...stepOneData,
            email,
            create_password,
            confirm_password,
            seq,
            seq_answer,
            card_number,
            cvc,
            exdate
        };

        if (create_password !== confirm_password) {
            toast.error('Password not match');
        } else if (confirm_password.length < 8) {
            toast.error('Password must be at least 8 characters long');
        } else if (!passwordRegex.test(confirm_password)) {
            toast.error('Password must contain at least one capital letter, one special character, and one number');
        } else {
            // Create user with email and password
            createUser(email, create_password)
                .then(res => {
                    navigate('/register/step3', { state: stepTwoData });
                })
                .catch(err => {
                    toast.error("Your email already exist");
                })
        }
    }
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <img src={logo}
                            className="w-32 mx-auto" />
                    </div>
                    <div className="mt-12 flex flex-col items-center justify-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Step - 2
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <div className="mx-auto max-w-xs">
                                <div className="">
                                    <form onSubmit={handelStep} className="mb-6">
                                        <h2 className="text-xl font-semibold text-gray-700  mb-2">Tell us about yourself</h2>
                                        {/* Email */}
                                        <div className="divider">Create Account</div>
                                        <div className="grid grid-cols-1 gap-4">
                                            <div>
                                                <label className="block text-gray-700  mb-1">Email <span className='text-red-500'>*</span></label>
                                                <input defaultValue={email} disabled required type="text" name="email" className="w-full rounded-lg border py-2 px-3" />
                                            </div>
                                        </div>

                                        {/* Date of birth */}
                                        <div className="grid grid-cols-1">
                                            <div>
                                                <label className="block text-gray-700  mb-1">Create Password <span className='text-red-500'>*</span></label>
                                                <input required type="password" name="create_password" className="w-full rounded-lg border py-2 px-3" />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700  mb-1">Confirm Password
                                                    <span className='text-red-500'>*</span></label>
                                                <input required type="password" name="confirm_password" className="w-full rounded-lg border py-2 px-3" />
                                            </div>
                                        </div>

                                        <div className="divider">Secret Info</div>
                                        {/* Email address & phone */}
                                        <div>
                                            <div>
                                                <label className="block text-gray-700  mb-1">Secret Question
                                                    <span className='text-red-500'>*</span></label>
                                                <input required type="text" name="seq" className="w-full rounded-lg border py-2 px-3" />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700  mb-1">Secret Answer
                                                    <span className='text-red-500'>*</span></label>
                                                <input required type="text" name="seq_answer" className="w-full rounded-lg border py-2 px-3" />
                                            </div>
                                        </div>

                                        <div className="divider">Payment info</div>
                                        {/* Payment info */}
                                        <div className="gap-4 grid grid-cols-1">
                                            <div className="mt-4">
                                                <label className="block text-gray-700  mb-1">Credit Card Number for Monthly Payment<span className='text-red-500'>*</span></label>
                                                <input placeholder="Card Number" required type="text" name="card_number" className="w-full rounded-lg border py-2 px-3" />
                                            </div>

                                            <div className="mt-4 grid grid-cols-2 items-center">
                                                <label className="block text-gray-700  mb-1">Security Code
                                                    <span className='text-red-500'>*</span></label>
                                                <input placeholder="CVC Number" required type="text" name="cvc" className="w-full rounded-lg border py-2 px-3" />
                                            </div>

                                            <div className="grid grid-cols-1 gap-4 mt-4">
                                                <div>
                                                    <label className="block text-gray-700  mb-1">Expiration Month
                                                        <span className='text-red-500'>*</span></label>
                                                    <input required type="month" name="exdate" className="w-full rounded-lg border py-2 px-3" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* next btn */}
                                        <div className="mt-6 justify-end flex">
                                            <button className="relative overflow-hidden btn  border-indigo-500 group mt-4 ">
                                                <span className="relative z-10 transition-colors group-hover:text-white px-6 ">Next</span>
                                                <span className="absolute inset-0 bg-indigo-500 transition-all duration-500 transform scale-x-0 origin-left group-hover:scale-x-50"></span>
                                                <span className="absolute inset-0 bg-indigo-500 transition-all duration-500 transform scale-x-0 origin-right group-hover:scale-x-50"></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by templatana's
                                    <Link to={'/'} className="border-b border-gray-500 border-dotted">
                                        Terms of Service
                                    </Link>
                                    and its
                                    <Link to={'/'} className="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: 'url(https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg)' }}>
                    </div>
                </div>
            </div >
            <ToastContainer />
        </div >
    );
};

export default Step2;