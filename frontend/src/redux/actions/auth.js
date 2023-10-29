import Cookies from 'js-cookie'
import axios from 'axios'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    LOGOUT_SUCCESS
} from './types'

export const checkAuthenticated = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    try {
        const res = await axios.get(`http://localhost:8000/api/accounts/authenticated/`, config)

        dispatch({
            type: AUTHENTICATED_SUCCESS,
            payload: res.data.isAuthenticated
        })
    } catch (err) {
        dispatch({
            type: AUTHENTICATED_FAIL,
        })
    }
}

export const register = (username, password, password2) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }

    const body = JSON.stringify({ username, password, password2 })

    try {
        const res = await axios.post(`http://localhost:8000/api/accounts/signup/`, body, config)

        dispatch({
            type: REGISTER_SUCCESS,
        })
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL,
        })
    }
}

export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }

    const body = JSON.stringify({ username, password })

    try {
        const res = await axios.post(`http://localhost:8000/api/accounts/login/`, body, config)

        dispatch({
            type: LOGIN_SUCCESS,
        })
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
        })
    }
}

export const logout = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        }
    }

    const body = JSON.stringify({
        'withCredentials': true
    })

    await axios.post(`http://localhost:8000/api/accounts/logout/`, body, config)

    dispatch({
        type: LOGOUT_SUCCESS,
    })
}