// src/redux/actions/menuItemActions.js
import { FETCH_MENU_ITEMS_REQUEST, FETCH_MENU_ITEMS_SUCCESS, FETCH_MENU_ITEMS_FAILURE } from '../actionTypes';
import config from '../../config'; // Import the config
import axios from 'axios';

export const fetchMenuItemsRequest = () => ({ type: FETCH_MENU_ITEMS_REQUEST });
export const fetchMenuItemsSuccess = (menuItems) => ({ type: FETCH_MENU_ITEMS_SUCCESS, payload: menuItems });
export const fetchMenuItemsFailure = (error) => ({ type: FETCH_MENU_ITEMS_FAILURE, payload: error });

export const fetchMenuItems = (restaurantId) => async (dispatch) => {
  dispatch(fetchMenuItemsRequest());
  try {

    
    const {data} = await axios.get(`${config.apiUrl}/api/menu-items/restaurant/${restaurantId}`);
  
    dispatch(fetchMenuItemsSuccess(data));
  } catch (error) {
    dispatch(fetchMenuItemsFailure(error.message));
  }
};
