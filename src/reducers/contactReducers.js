import {
    CONTACT_LIST_REQUEST,
    CONTACT_LIST_SUCCESS,
    CONTACT_LIST_FAIL,
    CONTACT_CREATE_REQUEST,
    CONTACT_CREATE_FAIL,
    CONTACT_CREATE_SUCCESS,
    CONTACT_CREATE_RESET
  } from '../constants/contactConstants';
  
  export const contactMessageListReducer = (state = { contacts: [] }, action) => {
    switch (action.type) {
      case CONTACT_LIST_REQUEST:
        return { loading: true, contacts: [] }
      case CONTACT_LIST_SUCCESS:
        return {
          loading: false,
          contacts: action.payload.contacts,
          pages: action.payload.pages,
          page: action.payload.page,
        }
      case CONTACT_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const contactCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CONTACT_CREATE_REQUEST:
        return { loading: true }
      case CONTACT_CREATE_SUCCESS:
        return { loading: false, success: true,
             contact: action.payload.contact, 
             respMessage:action.payload.message
            }
      case CONTACT_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case CONTACT_CREATE_RESET:
        return {}
      default:
        return state
    }
  }