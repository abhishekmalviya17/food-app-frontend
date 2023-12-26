// src/redux/reducers/orderReducer.js
import {
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_ERROR,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_ERROR,
    // Include other action types as necessary
} from '../actionTypes';

const initialState = {
    orders: [],
    error: null
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload,
                error: null
            };
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                orders: [...state.orders, action.payload],
                error: null
            };
        case FETCH_ORDERS_ERROR:
        case CREATE_ORDER_ERROR:
            // Handle other errors similarly
            return {
                ...state,
                error: action.payload
            };
        // Handle other action types (e.g., UPDATE_ORDER_SUCCESS, DELETE_ORDER_SUCCESS)
        default:
            return state;
    }
};

export default orderReducer;
