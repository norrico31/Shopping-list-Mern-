import uuid from 'react-uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Chocolate' },
        { id: uuid(), name: 'Mocha' }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload)
            };
        case ADD_ITEMS:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        default:
            return state;
    }
}