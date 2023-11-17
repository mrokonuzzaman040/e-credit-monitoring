import React from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation } from 'react-router-dom';

const PrivetRout = () => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivetRout;