import { combineReducers } from 'redux'
import { isLoading, hasErrored, userReducer } from './userReducer'


const rootReducer = combineReducers(
  {
    isLoading,
    error: hasErrored,
    user: userReducer
  }
)

export default rootReducer