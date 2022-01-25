import axios from 'axios'
import {
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_FAIL,
  CONTACT_CREATE_REQUEST,
  CONTACT_CREATE_SUCCESS,
  CONTACT_CREATE_FAIL
} from '../constants/contactConstants';
import { logout } from './userActions'

const { REACT_APP_SERVER_URL } = process.env;
export const listContactMessages = (pageNumber = '') => async (
  dispatch, getState
) => {
  try {
    dispatch({ type: CONTACT_LIST_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `${REACT_APP_SERVER_URL}/contacts?pageNumber=${pageNumber}`, config
    )

    dispatch({
      type: CONTACT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CONTACT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createContactMessage = (contact) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CONTACT_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`${REACT_APP_SERVER_URL}/contacts`, contact, config)

    dispatch({
      type: CONTACT_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: CONTACT_CREATE_FAIL,
      payload: message,
    })
  }
}