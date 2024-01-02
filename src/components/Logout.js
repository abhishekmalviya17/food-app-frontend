// Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions'; // adjust the import path as needed

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(logoutUser(navigate));
    }, [dispatch, navigate]);

    return (
        <div>
            Logging out...
        </div>
    );
}

export default Logout;
