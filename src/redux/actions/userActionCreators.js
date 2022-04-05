import axios from 'axios';
import { alertSuccess } from '../../utils/feedback';
import { LOGIN, LOGOUT } from '../types/userTypes';
import { requestFailed, requestStarted, requestSucceeded } from './feedbackActionCreators';

export const login = (user, token) => ({ type: LOGIN, payload: { user, token } });

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return { type: LOGOUT }
};

export const requestLogin = (email, password,history) => {
    return async (dispatch) => {
        try {
            dispatch(requestStarted())
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password })
            dispatch(requestSucceeded())
            const { message, user, token } = res.data
            if (message) {

                alertSuccess(message)
               history.push('/')
            }
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            dispatch(login(user, token))
           
            
        } catch (err) {
            let errorMessage = err.message || 'Request failed'
            if (err && err.response && err.response.data && err.response.data.error && typeof (err.response.data.error) === 'string') {
                errorMessage = err.response.data.error
            }
            if (err && err.response && err.response.data && err.response.data.error && err.response.data.error.details) {
                errorMessage = err.response.data.error.details[0] && err.response.data.error.details[0].message
            }
            dispatch(requestFailed(errorMessage))
        }
    }
}
export const requestRegister = ({ firstName, lastName, email, password }, history) => {
    return async (dispatch) => {
        dispatch(requestStarted())
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, { firstName, lastName, email, password })
            console.log({ res });
            dispatch(requestSucceeded())
            if (res.data.message) {
                alertSuccess(res.data.message)
            }
            history.push('/login')
        } catch (err) {
            let errorMessage = err.message || 'Request failed'
            if (err && err.response && err.response.data && err.response.data.error && typeof (err.response.data.error) === 'string') {
                errorMessage = err.response.data.error
            }
            if (err && err.response && err.response.data && err.response.data.error && err.response.data.error.details) {
                errorMessage = err.response.data.error.details[0] && err.response.data.error.details[0].message
            }
            dispatch(requestFailed(errorMessage))
        }
    }
}