import { 
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
    GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE,
    UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE
} from '../actionTypes';

const initialState = {
    user: null,
    userProfile: null,
    loading: false,
    getLoading: false,
    updateLoading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true };
        case LOGIN_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case GET_USER_REQUEST:
            return { ...state, getLoading: true };
        case GET_USER_SUCCESS:
            return { ...state, getLoading: false, userProfile: action.payload };
        case GET_USER_FAILURE:
            return { ...state, getLoading: false, error: action.payload };
        case UPDATE_USER_REQUEST:
            return { ...state, updateLoading: true };
        case UPDATE_USER_SUCCESS:
            return { ...state, updateLoading: false, userProfile: action.payload };
        case UPDATE_USER_FAILURE:
            return { ...state, updateLoading: false, error: action.payload };
        default:
            return state;
    }
};

export default authReducer;
