import { isLoading, hasErrored, logInUser } from '../actions'

export const loginUser = (user) => {
  const url = 'https://tech-connect-be.herokuapp.com/api/v1/login'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      if (!response.ok) {
        const errorText = await response.json()
        throw Error(errorText.error)
      }

      dispatch(isLoading(false))
      const currentUser = await response.json();
      const loggedInUser = {
        email: user.email,
        id: currentUser.data.id,
        api_key: currentUser.data.attributes.api_key,
      }
      const userObject = {...loggedInUser,...currentUser.data.attributes}
      dispatch(logInUser(userObject))
      dispatch(hasErrored(''))
    } catch(err) {
      dispatch(hasErrored(err.message))
    }
  }
}

