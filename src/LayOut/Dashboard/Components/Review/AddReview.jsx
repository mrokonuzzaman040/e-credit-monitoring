import React from 'react';

const AddReview = () => {
    
    const handelAddReview = () => {
        
    }

    return (
        <div>
            <div className="">
                <h2>Add Reviews</h2>
            </div>
            <div className="divider"></div>
            <div className="">
                <p className="py-4">Name: <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                </p>

                <p className="py-4">Details: <textarea type="text" placeholder="Type here" className="textarea textarea-bordered w-full max-w-full" />
                </p>

                <p className="py-4">Rating: <input type="number" maxLength="1" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                </p>
            </div>
            <div className="divider"></div>
            <div className="flex justify-end">
                <button className='btn w-auto'>Add</button>
            </div>
        </div>
    );
};

export default AddReview;