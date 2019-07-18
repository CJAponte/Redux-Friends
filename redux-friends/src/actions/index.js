import axios from 'axios'
import {axiosWithAuth} from '../axiosWithAuth'


export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const login = creds => dispatch => {
    dispatch({type:LOGIN_START});
    return axios
    .post('http://localhost:5000/api/login',creds)
    .then(res => {
        localStorage.setItem('token',res.data.payload)
        dispatch({type:LOGIN_SUCCESS,payload:res.data.payload})
        console.log(res)
    })
    .catch(err => {
        dispatch({type:LOGIN_FAILURE,payload:err.response})
        console.log(err)
    })
}

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START'
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS'
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE'

export const getFriends = () => dispatch => {
    dispatch({type:FETCH_FRIENDS_START})
    axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
        dispatch({type:FETCH_FRIENDS_SUCCESS,payload:res.data})
        console.log('friends ',res)
    })
    .catch(err => {
        dispatch({type:FETCH_FRIENDS_FAILURE,payload:err.response})
        console.log(err)
    })
}