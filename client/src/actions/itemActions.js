import axios from 'axios';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM, ITEMS_LOADING } from './types';


export const getItems = () => async (dispatch) => {
    dispatch(setItemsLoading());
    const res = await axios.get('/api/items');
    dispatch({
        type: GET_ITEMS,
        payload: res.data
    })
}
export const addItem = (item) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify(item);
    const res = await axios.post('/api/items', body, config);
    dispatch({
        type: ADD_ITEMS,
        payload: res.data
    })
}
export const deleteItem = (id) => async (dispatch) => {
    await axios.delete(`/api/items/${id}`);
    dispatch({
        type: DELETE_ITEM,
        payload: id
    })
}
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}