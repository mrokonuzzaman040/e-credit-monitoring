import React from 'react';
import { useLocation } from 'react-router-dom';

const Step3 = () => {
    const location = useLocation();
    const data = location.state;
    console.log(data);
    return (
        <div>
            <div className="grid grid-cols-1 gap-4">
                <div>
                    <label className="block text-gray-700  mb-1">Email <span className='text-red-500'>*</span></label>
                    <input required type="text" name="email" className="w-full rounded-lg border py-2 px-3" />
                </div>
            </div>
        </div>
    );
};

export default Step3;