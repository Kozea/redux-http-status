import { LOCATION_CHANGE } from 'react-router-redux'

export const initial = { code: 200, url: null }
export const SET_CODE = '@@http-status/SET_CODE'
export const SET_REDIRECT = '@@http-status/SET_REDIRECT'

export const httpStatusReducer = (state = initial, action) => {
  switch (action.type) {
    case SET_CODE:
      return { ...state, code: action.code }
    case SET_REDIRECT:
      return { ...state, code: action.code, url: action.url }
    case LOCATION_CHANGE:
      return initial
    default:
      return state
  }
}
