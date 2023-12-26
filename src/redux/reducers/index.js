import { combineReducers } from 'redux';
import authReducer from './authReducer';
import restaurantReducer from './restaurantReducer';
import categoryReducer from './categoryReducer';
import menuItemReducer from './menuItemReducer';
import cartReducer from './cartReducer';
import orderReducer from './ordersReducer';
import addressReducer from './addressReducer';
const rootReducer = combineReducers({
    auth: authReducer,
    restaurants: restaurantReducer,
    categories: categoryReducer,
    menuItems: menuItemReducer,
    cart: cartReducer,
    orders: orderReducer,
    address: addressReducer
});

export default rootReducer;
