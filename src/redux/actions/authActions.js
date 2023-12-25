import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actionTypes';
import axios from 'axios';
import config from '../../config'; // Import the config
import { setAuthToken } from '../../utils/setAuthToken';


const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = error => ({ type: LOGIN_FAILURE, payload: error });

console.log('env',process.env.NODE_ENV )

export const loginUser = (credentials, navigate, showSnackbar) => dispatch => {
    dispatch(loginRequest());
    const url = `${config.apiUrl}/api/users/login`;
    axios.post(url, credentials)
        .then(response => {
            dispatch(loginSuccess(response.data));
            const user = response.data;
            // Save user details and token to localStorage
            localStorage.setItem('user', JSON.stringify(response.data));
            setAuthToken(user.token);
            showSnackbar( 'Login successful! Redirecting...','success' );
            setTimeout(() => navigate('/home'), 4000);
        })
        .catch(error => {
            const errorMsg = error.response ? error.response.data.message : error.message;
            dispatch(loginFailure(errorMsg));
           showSnackbar( errorMsg, 'error' );
        });
};

export const logoutUser = (navigate) => {
    // Clear user details from localStorage
    localStorage.removeItem('user');
    setAuthToken(false);
    navigate('/login');
};

