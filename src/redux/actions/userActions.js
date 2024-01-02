import axios from 'axios';
import config from '../../config';
import { setAuthToken } from '../../utils/setAuthToken';
import { 
    GET_USER_REQUEST, 
    GET_USER_SUCCESS, 
    GET_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE
} from '../actionTypes';

// Action Creators for Getting User
const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = user => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = error => ({ type: GET_USER_FAILURE, payload: error });

// Thunk function to fetch user details
export const getUser = (userId, showSnackbar) => dispatch => {
    dispatch(getUserRequest());
    axios.get(`${config.apiUrl}/api/users/${userId}`)
        .then(response => {
            dispatch(getUserSuccess(response.data));
        })
        .catch(error => {
            const errorMsg = error.response ? error.response.data.message : error.message;
            dispatch(getUserFailure(errorMsg));
            showSnackbar && showSnackbar(errorMsg, 'error');
        });
};

// Action Creators for Updating User
const updateUserRequest = () => ({ type: UPDATE_USER_REQUEST });
const updateUserSuccess = user => ({ type: UPDATE_USER_SUCCESS, payload: user });
const updateUserFailure = error => ({ type: UPDATE_USER_FAILURE, payload: error });

// Thunk function to update user details
export const updateUser = (userId, userData, navigate, showSnackbar) => dispatch => {
    dispatch(updateUserRequest());
    axios.put(`${config.apiUrl}/api/users/${userId}`, userData)
        .then(response => {
            dispatch(updateUserSuccess(response.data));
            showSnackbar && showSnackbar('Update successful!', 'success');
            navigate && navigate('/settings');
        })
        .catch(error => {
            const errorMsg = error.response ? error.response.data.message : error.message;
            dispatch(updateUserFailure(errorMsg));
            showSnackbar && showSnackbar(errorMsg, 'error');
        });
};
