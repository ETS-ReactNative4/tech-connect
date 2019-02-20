import { isLoading, hasErrored, updateUserAction } from '../actions'

export const updateUser = (user) => {
  const url = 'https://tech-connect-be.herokuapp.com/api/v1/users'
  return async (dispatch) => {

    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      if(!response.ok) {
        const errorText = await response.json()
        throw Error(errorText.error)
      }

      dispatch(isLoading(false))
      const updatedUser = await response.json()
      dispatch(updateUserAction(updatedUser.data.attributes))
      dispatch(hasErrored(''))
    } catch(err) {
      dispatch(hasErrored(err.message))
    }
  }
}