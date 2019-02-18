import { userReducer, isLoading, hasErrored } from '../reducers/userReducer'
import * as actions from '../actions'


describe('userReducer', () => {
  it('should return default state', () => {
    const expected = {}
    const result = userReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should log in a user', () => {
    const expected = {name: 'Kylie', id: 1}
    const result = userReducer({}, actions.logInUser(expected))
    expect(result).toEqual(expected)
  })

  it('should update a user', () => {
    const expected = {name: 'Kaylee', id: 1}
    const result = userReducer({}, actions.updateUserAction(expected))
    expect(result).toEqual(expected)
  })

  it('should log out a user', () => {
    const initial = {name: 'person', id: 1}
    const expected = {}
    const result = userReducer(initial, actions.logoutUser())
    expect(result).toEqual(expected)
  })

  describe('isLoading', () => {
    it('should return default state', () => {
      const expected = false
      const result = isLoading(undefined, false)
      expect(result).toEqual(expected)
    })

    it('should return state with a true or false value', () => {
      const bool = true
      const result = isLoading(false, actions.isLoading(bool))
      expect(result).toEqual(bool)
    })
  })

  describe('hasErrored', () => {
    it('should return default state', () => {
      const expected = ''
      const result = hasErrored(undefined, '')
      expect(result).toEqual(expected)
    })

    it('should return the state with an error message', () => {
      const message = 'error message'
      const result = hasErrored('', actions.hasErrored(message))
      expect(result).toEqual(message)
    })
  })
})
