import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import auth from './auth';
import error from './error';

export default combineReducers({
    item: itemReducer,
    auth,
    error
})