import axios from 'axios';
import {CREATE_ORDER_ERROR, CREATE_ORDER_SUCCESS, FETCH_ORDERS_ERROR, FETCH_ORDERS_SUCCESS} from '../actionTypes'
const apiUrl = '/api/orders'; // Adjust according to your API endpoint


export const createOrder = (orderData) => async (dispatch, getState) => {
    try {
       

        const response = await axios.post(apiUrl, orderData);
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: CREATE_ORDER_ERROR, payload: error.response.data.message });
    }
};