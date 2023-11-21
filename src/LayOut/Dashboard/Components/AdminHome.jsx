import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useEffect } from 'react';

const AdminHome = () => {
    const { user } = useContext(AuthContext);

    // 

    return (
        <div>
            <h1>Hello {user.displayName}</h1>
            <h1>Admin Home</h1>
        </div>
    );
};

export default AdminHome;