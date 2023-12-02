import React from 'react';
import ReactStoreIndicator from 'react-score-indicator'
import { useForm } from "react-hook-form";


const CreditScore = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const score = 750;

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
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
                <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 gap-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-inquiryDate">
                                Inquiry Date
                            </label>
                            <input
                                {...register('inquiryDate', { required: true, pattern: /\d{4}-\d{2}-\d{2}/ })}
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-inquiryDate" type="text" placeholder="2022-01-01" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-inquiryType">
                                Inquiry Type
                            </label>
                            <input
                                {...register('inquiryType', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-inquiryType" type="text" placeholder="Type" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-permPurpose">
                                Perm Purpose
                            </label>
                            <input
                                {...register('permPurpose', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-permPurpose" type="text" placeholder="Purpose" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-trackingId">
                                Tracking ID
                            </label>
                            <input
                                {...register('trackingId', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-trackingId" type="text" placeholder="Tracking ID" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-sourceSystemId">
                                Source System ID
                            </label>
                            <input
                                {...register('sourceSystemId', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-sourceSystemId" type="text" placeholder="Source System ID" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-sourceName">
                                Source Name
                            </label>
                            <input
                                {...register('sourceName', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-sourceName" type="text" placeholder="Source Name" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-resellerName">
                                Reseller Name
                            </label>
                            <input
                                {...register('resellerName', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-resellerName" type="text" placeholder="Reseller Name" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-platformName">
                                Platform Name
                            </label>
                            <input
                                {...register('platformName', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-platformName" type="text" placeholder="Platform Name" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-intermediaryName">
                                Intermediary Name
                            </label>
                            <input
                                {...register('intermediaryName', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-intermediaryName" type="text" placeholder="Intermediary Name" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                                Requestor Name
                            </label>
                            <input
                                {...register('requestor.name', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-name" type="text" placeholder="Requestor Name" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-endUser">
                                Requestor End User
                            </label>
                            <input
                                {...register('requestor.endUser', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-endUser" type="text" placeholder="Requestor End User" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                Requestor Email
                            </label>
                            <input
                                {...register('requestor.email', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-email" type="text" placeholder="Requestor Email" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address">
                                Requestor Address
                            </label>
                            <input
                                {...register('requestor.address', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-address" type="text" placeholder="Requestor Address" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phoneNumbers">
                                Requestor Phone Numbers
                            </label>
                            <input
                                {...register('requestor.phoneNumbers', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-phoneNumbers" type="text" placeholder="Requestor Phone Numbers" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-customerReferenceIdentifier">
                                Customer Reference Identifier
                            </label>
                            <input
                                {...register('primaryConsumer.personalInformation.customerReferenceIdentifier', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-customerReferenceIdentifier" type="text" placeholder="Customer Reference Identifier" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-socialSecurityNumber">
                                Social Security Number
                            </label>
                            <input
                                {...register('primaryConsumer.personalInformation.socialSecurityNumber', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-indigo-100 focus:border-indigo-500" id="grid-socialSecurityNumber" type="text" placeholder="Social Security Number" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <button className="bg-indigo-500 hover:ring-2 hover:ring-indigo-700  text-white font-bold py-2 px-4 rounded">
                                Check Credit Score
                            </button>
                        </div>
                    </div>
                </form>
            </div >
        </div>
    );
};

export default CreditScore;
