import { combineReducers } from 'redux'
import { isLoading, hasErrored } from './userReducer'


const rootReducer = combineReducers(
  {
    isLoading,
    error: hasErrored,
  }
)

export default rootReducer