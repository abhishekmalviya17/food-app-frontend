import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const  user  = localStorage.getItem('user');

    if (!user) {
        // User not logged in, redirect to login page
        return <Navigate to="/login" />;
    }

    // User logged in, render the requested component
    return <Element {...rest} />;
};

export default PrivateRoute;
