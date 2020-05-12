import axios from 'axios';
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL} from './types';
import { returnErrors } from './error';


// Check token & load user 
export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
   
    axios.get('api/auth/user', tokenConfig(getState))
        .then((res) => dispatch({ 
            type: USER_LOADED,
            payload: res.data
        }))
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({ type: AUTH_ERROR });
            
        })
}

export const tokenConfig = (getState) => {
    const token = getState().auth.token;
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
}