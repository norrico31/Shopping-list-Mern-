import axios from 'axios';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM, ITEMS_LOADING } from './types';
import { tokenConfig } from './auth';
import { returnErrors } from './error';

export const getItems = () =>  (dispatch) => {
    dispatch(setItemsLoading());
    axios.get('/api/items')
    .then((res) => {
        dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.reponse.status)))
}

export const addItem = (item) => (dispatch, getState) => {
    axios.post('/api/items', item, tokenConfig(getState))
    .then((res) => {
        dispatch({
            type: ADD_ITEMS,
            payload: res.data
        });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.reponse.status)))
}

export const deleteItem = (id) => (dispatch, getState) => {
    axios.delete(`/api/items/${id}`, tokenConfig(getState))
    .then((res) => {
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.reponse.status)))   
}

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}