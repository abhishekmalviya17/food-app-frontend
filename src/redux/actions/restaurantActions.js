import axios from 'axios';
import { FETCH_RESTAURANTS_REQUEST, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAILURE } from '../actionTypes';
import config from '../../config'; // Import the config
export const fetchRestaurantsRequest = () => ({ type: FETCH_RESTAURANTS_REQUEST });
export const fetchRestaurantsSuccess = restaurants => ({ type: FETCH_RESTAURANTS_SUCCESS, payload: restaurants });
export const fetchRestaurantsFailure = error => ({ type: FETCH_RESTAURANTS_FAILURE, payload: error });

export const fetchRestaurants = () => {
    return dispatch => {
        dispatch(fetchRestaurantsRequest());
        axios.get(`${config.apiUrl}/api/restaurants/`) // Replace with your API endpoint
            .then(response => {
                dispatch(fetchRestaurantsSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchRestaurantsFailure(error.message));
            });
    };
};

export const fetchRestaurantsByCategory = (category) => {
    return dispatch => {
        dispatch(fetchRestaurantsRequest());
        axios.get(`${config.apiUrl}/api/restaurants/byCategory?categories=${category}`) // Replace with your API endpoint for restaurants filtered by category
            .then(response => {
                dispatch(fetchRestaurantsSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchRestaurantsFailure(error.message));
            });
    };
};
