import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_CART, CART_ERROR, CART_LOADING_END, CART_LOADING_START} from '../actionTypes';

const initialState = {
    items: [],
    error: null,
    loading: false
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
        case CART_LOADING_START:
                return {
                  ...state,
                  loading: true,
                };
        case CART_LOADING_END:
                return {
                  ...state,
                  loading: false,
                };
        default:
            return state;
    }
};

export default cartReducer;
