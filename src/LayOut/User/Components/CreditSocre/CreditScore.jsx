import React from 'react';
import ReactStoreIndicator from 'react-score-indicator'
import { useForm } from "react-hook-form";


const CreditScore = () => {
    const { register, handleSubmit, reset } = useForm();
    const score = 750;
    return (
        <div>
            <div className="items-center text-center mt-10">
                <ReactStoreIndicator
                    value={score}
                    maxValue={850}
                />
                <p>Your score is: {score}</p>
            </div>
            <div className="divider"></div>
            <div className="">
                <form onSubmit={handleSubmit()} className="w-full ">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Property Name
                            </label>
                            <input {...register('home_name', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-indigo-100" id="grid-first-name" type="text" placeholder="Amar Villa" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Property Location
                            </label>
                            <input {...register('home_location', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-last-name" type="text" placeholder="Mirpur-11" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Property Description
                            </label>
                            <textarea {...register('home_description', { required: true })} className="textarea textarea-bordered h-32 w-full" placeholder=" Property Description"></textarea>
                        </div>

                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 gap-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-price">
                                Price Rangge
                            </label>
                            <div className="flex gap-3 items-center">
                                <input {...register('home_starting_price', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-price" type="text" placeholder="$100" />
                                <p className=""> - </p>
                                <input {...register('home_ending_price', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-time" type="text" placeholder="$999" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                Property Type
                            </label>
                            <div className="relative">
                                <select {...register('home_type', { required: true })} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-state">
                                    <option>Flat</option>
                                    <option>House</option>
                                    <option>Office</option>
                                    <option>Shop</option>
                                    <option>Garage</option>
                                    <option>Land</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 6.707a1 1 0 010-1.414L8.586 1.5a2 2 0 012.828
                                            0l2.829 2.829a1 1 0 11-1.414 1.414L11
                                            4.414V13a1 1 0 11-2 0V4.414L6.707
                                            6.707a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>

                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Property Area
                            </label>
                            <input {...register('home_area', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-zip" type="text" placeholder="1200" />
                        </div>

                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                Property Bed
                            </label>
                            <input {...register('home_bed', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-city" type="text" placeholder="3" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                Property Bath
                            </label>
                            <div className="relative">
                                <select {...register('home_bath', { required: true })} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-state">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 6.707a1 1 0 010-1.414L8.586 1.5a2 2 0 012.828
                                            0l2.829 2.829a1 1 0 11-1.414 1.414L11
                                            4.414V13a1 1 0 11-2 0V4.414L6.707
                                            6.707a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                Property Garage
                            </label>
                            <input {...register('home_garage', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-zip" type="text" placeholder="1" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                Property Size
                            </label>
                            <input {...register('home_size', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-city" type="text" placeholder="1200" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                Property Status
                            </label>
                            <div className="relative">
                                <select {...register('home_status', { required: true })} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-state">
                                    <option>Rent</option>
                                    <option>Sale</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 6.707a1 1 0 010-1.414L8.586 1.5a2 2 0 012.828
                                            0l2.829 2.829a1 1 0 11-1.414 1.414L11
                                            4.414V13a1 1 0 11-2 0V4.414L6.707
                                            6.707a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                Property Image
                            </label>
                            <input {...register('home_photo',)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" type="file" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <button className="bg-indigo-500 hover:ring-2 hover:ring-indigo-700  text-white font-bold py-2 px-4 rounded">
                                Add Property
                            </button>
                        </div>
                    </div>
                </form>
            </div >
        </div>
    );
};

export default CreditScore;
