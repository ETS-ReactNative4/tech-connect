export const loginUser = (user) => ({
  type: 'LOG_IN',
  user
})

export const logoutUser = () => ({
  type: 'LOG_OUT'
})

export const updateUser = (user) => ({
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