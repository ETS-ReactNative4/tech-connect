export const isLoading = (state=false, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const hasErrored = (state=false, action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      return action.message
    default:
      return state
  }
}

export const userReducer = (state={}, action) => {
  switch(action.type) {
    case 'LOG_IN':
      return action.user
    case 'UPDATE_USER':
      return {...state.user, ...action.user}
    case 'LOG_OUT':
      return {}
    default:
      return state
  }
}