import { SET_CODE, SET_REDIRECT } from './reducer'

export const setCode = code => ({
  type: SET_CODE,
  code,
})

export const setRedirect = (code, url) => ({
  type: SET_REDIRECT,
  code,
  url,
})
