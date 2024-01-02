import axios from 'axios';
import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_CART, CART_ERROR, UPDATE_CART, CART_LOADING_START, CART_LOADING_END } from '../actionTypes';

import config from '../../config'; 
const apiUrl = '/api/cart'; // Adjust according to your API endpoint

// Utility function to start loading
const startLoading = () => ({ type: CART_LOADING_START });

// Utility function to end loading
const endLoading = () => ({ type: CART_LOADING_END });


// Action to fetch the cart
export const fetchCart = () => async (dispatch) => {
    dispatch(startLoading());
    try {
        const response = await axios.get(`${config.apiUrl}${apiUrl}`);
        dispatch({ type: FETCH_CART, payload: response.data });
    } catch (error) {
        dispatch({ type: CART_ERROR, payload: error.response.data.message });
    } finally {
        dispatch(endLoading());
    }
};

// Action to add an item to the cart
export const addToCart = (menuItemId, quantity) => async (dispatch) => {
    dispatch(startLoading());
    try {
        const response = await axios.post(`${config.apiUrl}${apiUrl}/add`, { menuItemId, quantity });
        dispatch({ type: ADD_TO_CART, payload: response.data });
        dispatch(fetchCart());
    } catch (error) {
        dispatch({ type: CART_ERROR, payload: error.response.data.message });
    } finally {
        dispatch(endLoading());
    }
};

// Action to remove an item from the cart
export const removeFromCart = (menuItemId) => async (dispatch) => {
    dispatch(startLoading());
    try {
        const response = await axios.post(`${config.apiUrl}${apiUrl}/remove`, { menuItemId });
        dispatch({ type: REMOVE_FROM_CART, payload: response.data });
        dispatch(fetchCart());
    } catch (error) {
        dispatch({ type: CART_ERROR, payload: error.response.data.message });
    } finally {
        dispatch(endLoading());
    }
};


export const increaseQuantity = (menuItemId) => async (dispatch) => {
    dispatch(startLoading());
    try {
        const response = await axios.post(`${config.apiUrl}/api/cart/increase`, { menuItemId });
        dispatch({ type: UPDATE_CART, payload: response.data });
        dispatch(fetchCart());
    } catch (error) {
        dispatch({ type: CART_ERROR, payload: error.response.data.message });
    } finally {
        dispatch(endLoading());
    }
};

// Action to decrease the quantity of an item in the cart
export const decreaseQuantity = (menuItemId) => async (dispatch) => {
    dispatch(startLoading());
    try {
        const response = await axios.post(`${config.apiUrl}/api/cart/decrease`, { menuItemId });
        dispatch({ type: UPDATE_CART, payload: response.data });
        dispatch(fetchCart());
    } catch (error) {
        dispatch({ type: CART_ERROR, payload: error.response.data.message });
    } finally {
        dispatch(endLoading());
    }
};
