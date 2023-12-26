import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_CART, CART_ERROR } from '../actionTypes';

const initialState = {
    items: [],
    error: null
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CART:
            return {
                ...state,
                items: action.payload.items,
                error: null
            };
        case ADD_TO_CART:
            return {
                ...state,
                items: action.payload.items,
                error: null
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: action.payload.items,
                error: null
            };
        case CART_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default cartReducer;
