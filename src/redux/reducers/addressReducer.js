// src/redux/reducers/addressReducer.js
import {
    FETCH_ADDRESSES_REQUEST,
    FETCH_ADDRESSES_SUCCESS,
    FETCH_ADDRESSES_FAILURE,
    ADD_ADDRESS_SUCCESS,
    REMOVE_ADDRESS_SUCCESS
} from '../actionTypes';

const initialState = {
    loading: false,
    addresses: [],
    error: ''
};

const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ADDRESSES_REQUEST:
            return { ...state, loading: true };
        case FETCH_ADDRESSES_SUCCESS:
            return { loading: false, addresses: action.payload, error: '' };
        case FETCH_ADDRESSES_FAILURE:
            return { loading: false, addresses: [], error: action.payload };
        case ADD_ADDRESS_SUCCESS:
            return { ...state, addresses: [...state.addresses, action.payload] };
        case REMOVE_ADDRESS_SUCCESS:
            return { ...state, addresses: state.addresses.filter(address => address.id !== action.payload) };
        default:
            return state;
    }
};

export default addressReducer;
