import storage from 'store'

export const setToken = token => {
  return localStorage.setItem('token', token)
}

export const getToken = () => {
  return localStorage.getItem('token')
}

export const setUserId = userId => {
  return localStorage.setItem('userId', userId)
}

export const setLoginSource = loginSource => {
  return localStorage.setItem('loginSource', loginSource)
}

export const resetLocalStorageInfo = () => {
  return localStorage.clear()
}
