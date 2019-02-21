import { updateUser } from '../thunks/updateUser'
import { isLoading, hasErrored, updateUserAction } from '../actions'


describe('updateUser', () => {
  let mockDispatch
  let mockUserFetch
  let mockUser

  beforeEach(() => {
    mockUserFetch = {
      attributes: {
        api_key: 1234,
        "email": "email@email.com", 
        "id": 2
      }
    }

    mockUser = {
      api_key: 1234,
      id: 2,
      email: 'email@email.com'
    }

    mockUrl = 'https://tech-connect-be.herokuapp.com/api/v1/users'
    mockDispatch = jest.fn()
  })

  it('should call dispatch with the isLoading action', () => {
    const thunk = updateUser()
    thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      json: () => Promise.resolve({
        errorText: 'error'
      })
    }))

    const thunk = updateUser()   

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(''))
  })

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        data: mockUserFetch
      })
    }))

    const thunk = updateUser()

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch updateUserAction if the response is ok', async () => {

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        data: mockUserFetch
      })
    }))

    const thunk = updateUser(mockUser)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(updateUserAction(mockUser))
  })
})