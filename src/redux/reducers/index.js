import { combineReducers } from 'redux';
import authReducer from './authReducer';
import restaurantReducer from './restaurantReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    restaurants: restaurantReducer,
    categories: categoryReducer
});

export default rootReducer;
