import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { MdBlock } from 'react-icons/md';

const Step1 = () => {
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
                            Step - 1
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <div className="mx-auto max-w-xs">
                                <div className="">
                                    <form className="mb-6">
                                        <h2 className="text-xl font-semibold text-gray-700  mb-2">Tell us about yourself</h2>
                                        {/* name */}
                                        <div className="divider">Personal Info</div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label name="first_name" className="block text-gray-700  mb-1">First Name  <span className='text-red-500'>*</span></label>
                                                <input required type="text" id="first_name" className="w-full rounded-lg border py-2 px-3" />
                                            </div>
                                            <div>
                                                <label name="last_name" className="block text-gray-700  mb-1">Last Name <span className='text-red-500'>*</span></label>
                                                <input required type="text" id="last_name" className="w-full rounded-lg border py-2 px-3" />
                                            </div>
                                        </div>

                                        {/* Date of birth */}
                                        <div className="grid grid-cols-1">
                                            <div>
                                                <label name="first_name" className="block text-gray-700  mb-1">Month <span className='text-red-500'>*</span></label>
                                                <input required type="date" id="first_name" className="w-full rounded-lg border py-2 px-3" />
                                            </div>
                                        </div>

                                        {/* Last 4 Digits of Social Security Number* */}
                                        <div className="mt-4">
                                            <h2 className='font-normal text-lg'>Last 4 Digits of Social Security Number <span className='text-red-500'>*</span></h2>
                                            <p className='font-normal text-sm'>By providing the last 4  digits of my SSN, I understand that TransUnion will retrieve my full SSN to deliver products that I input requiredrequest on this website.</p>
                                            <div className="grid grid-cols-2 justify-center">
                                                <label name="city" className="block text-gray-700  mb-1"><MdBlock /></label>
                                                <input required type="number" id="city" className="w-full rounded-lg border py-2 px-3" />
                                            </div>
                                        </div>

                                        <div className="divider">Contact Info</div>


                                        {/* Email address & phone */}
                                        <div>
                                            <div>
                                                <label name="email" className="block text-gray-700  mb-1">Email Address <span className='text-red-500'>*</span></label>
                                                <input required type="text" id="state" className="w-full rounded-lg border py-2 px-3" />
                                            </div>
                                            <div>
                                                <label name="phone" className="block text-gray-700  mb-1">Phone  <span className='text-red-500'>*</span></label>
                                                <input required type="text" id="zip" className="w-full rounded-lg border py-2 px-3" />
                                            </div>
                                        </div>

                                        <div className="divider">Address Info</div>
                                        {/* Address */}
                                        <div className="mt-4">
                                            <label name="address" className="block text-gray-700  mb-1">Address <span className='text-red-500'>*</span></label>
                                            <input required type="text" id="address" className="w-full rounded-lg border py-2 px-3" />
                                        </div>

                                        <div className="mt-4">
                                            <label name="city" className="block text-gray-700  mb-1">City <span className='text-red-500'>*</span></label>
                                            <input required type="text" id="city" className="w-full rounded-lg border py-2 px-3" />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <label name="state" className="block text-gray-700  mb-1">State <span className='text-red-500'>*</span></label>
                                                <input required type="text" id="state" className="w-full rounded-lg border py-2 px-3" />
                                            </div>
                                            <div>
                                                <label name="zip" className="block text-gray-700  mb-1">ZIP Code <span className='text-red-500'>*</span></label>
                                                <input required type="text" id="zip" className="w-full rounded-lg border py-2 px-3" />
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
        </div >
    );
};

export default Step1;