import axios from 'axios';
import config from '../../config'; 
import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from '../actionTypes';


export const fetchCategoriesRequest = () => ({
    type: FETCH_CATEGORIES_REQUEST
  });
  
  export const fetchCategoriesSuccess = (categories) => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories
  });
  
  export const fetchCategoriesFailure = (error) => ({
    type: FETCH_CATEGORIES_FAILURE,
    payload: error
  });
  
  export const fetchCategories = () => {
    return async (dispatch) => {
      dispatch(fetchCategoriesRequest());
      try {
        const response = await axios.get(`${config.apiUrl}/api/categories`);
        dispatch(fetchCategoriesSuccess(response.data));
      } catch (error) {
        dispatch(fetchCategoriesFailure(error.message));
      }
    };
  };