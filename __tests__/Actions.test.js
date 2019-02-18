import * as actions from '../actions'

describe('actions', () => {
  it('should have a type of LOG_IN with a user object', () => {
    const user = { name: 'Kylie' }
    const expected = {
      type: 'LOG_IN',
      user
    }

    const result = actions.logInUser(user)
    expect(result).toEqual(expected)
  })

  it('should have a type of UPDATE_USER with a user object', () => {
    const user = { name: 'Kylie' }
    const expected = {
      type: 'UPDATE_USER',
      user
    }

    const result = actions.updateUserAction(user)
    expect(result).toEqual(expected)
  })


  it('should have a type of LOG_OUT', () => {
    const expected = {
      type: 'LOG_OUT',
    }

    const result = actions.logoutUser()
    expect(result).toEqual(expected)
  })

  it('should have a type of IS_LOADING with boolean', () => {
    const isLoading = true
    const expected = {
      type: 'IS_LOADING',
      isLoading
    }

    const result = actions.isLoading(isLoading)
    expect(result).toEqual(expected)
  })

  it('should have a type of HAS_ERRORED with an error message ', () => {
    const message = 'error retrieving info'
    const expected = {
      type: 'HAS_ERRORED',
      message
    }

    const result = actions.hasErrored(message)
    expect(result).toEqual(expected)
  })
})
