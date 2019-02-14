export const logInUser = (user) => ({
  type: 'LOG_IN',
  user
})

export const logoutUser = () => ({
  type: 'LOG_OUT'
})

export const updateUserAction = (user) => ({
  type: 'UPDATE_USER',
  user
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
})