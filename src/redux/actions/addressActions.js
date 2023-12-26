// src/redux/actions/addressActions.js
import axios from 'axios';
import config from '../../config';
import {UPDATE_ADDRESS_SUCCESS, FETCH_ADDRESSES_REQUEST, FETCH_ADDRESSES_SUCCESS, FETCH_ADDRESSES_FAILURE , ADD_ADDRESS_SUCCESS, REMOVE_ADDRESS_SUCCESS  } from '../actionTypes'


const fetchAddressesRequest = () => ({ type: FETCH_ADDRESSES_REQUEST });
const fetchAddressesSuccess = (addresses) => ({ type: FETCH_ADDRESSES_SUCCESS, payload: addresses });
const fetchAddressesFailure = (error) => ({ type: FETCH_ADDRESSES_FAILURE, payload: error });
const addAddressSuccess = (address) => ({ type: ADD_ADDRESS_SUCCESS, payload: address });
const removeAddressSuccess = (addressId) => ({ type: REMOVE_ADDRESS_SUCCESS, payload: addressId });


const updateAddressSuccess = (updatedAddress) => ({ 
    type: UPDATE_ADDRESS_SUCCESS, 
    payload: updatedAddress 
});


export const fetchAddresses = () => (dispatch) => {
    dispatch(fetchAddressesRequest());
    axios.get(`${config.apiUrl}/api/users/addresses/`)
        .then(response => {
            dispatch(fetchAddressesSuccess(response.data));
        })
        .catch(error => {
            dispatch(fetchAddressesFailure(error.message));
        });
};

export const addAddress = (newAddress) => (dispatch) => {
    axios.post(`${config.apiUrl}/api/users/address/add`, newAddress)
        .then(response => {
            dispatch(addAddressSuccess(response.data));
            dispatch(fetchAddresses())
        })
        .catch(error => {
            // Handle error
        });
};

export const removeAddress = (addressId) => (dispatch) => {
    axios.post(`${config.apiUrl}/api/users/address/remove`, { addressId })
        .then(response => {
            dispatch(removeAddressSuccess(addressId));
        })
        .catch(error => {
            // Handle error
        });
};

export const updateAddress = (addressId, updatedAddressData) => (dispatch) => {
    axios.put(`${config.apiUrl}/api/users/address/update/${addressId}`, updatedAddressData)
        .then(response => {
            dispatch(updateAddressSuccess(response.data));
        })
        .catch(error => {
            // Handle error
            // You might want to dispatch an error action here
        });
};
