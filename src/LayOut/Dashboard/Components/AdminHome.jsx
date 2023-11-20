import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <div>
            <h1>Hello {user.displayName}</h1>
            <h1>Admin Home</h1>
        </div>
    );
};

export default AdminHome;