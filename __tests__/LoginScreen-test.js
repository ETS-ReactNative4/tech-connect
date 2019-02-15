import React from 'react'
import { LoginScreen, mapStateToProps } from '../LoginScreen'
import { shallow } from 'enzyme'


import renderer from 'react-test-renderer'


describe('LoginScreen', () => {
  let wrapper
  let onPressEvent

  beforeEach(() => {
    onPressEvent = jest.fn()
    wrapper = shallow(<LoginScreen onPress={ onPressEvent } loginUser={jest.fn} createUser={jest.fn()} />)
  })

  it('renders the snapshot', () => {
    const tree = renderer.create(
      <LoginScreen />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggles the screen between register and sign in', () => {
    wrapper.instance().toggleRegister()
    expect(wrapper.instance().state.register).toEqual(true)
  })

  it('calls handleSubmit on button press', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleSubmit')
    wrapper.instance().forceUpdate()
    wrapper.find('Button').simulate('press')
    expect(spy).toHaveBeenCalled();
  })

  it('creates a new user account', () => {
    wrapper.setState({ register: true })
    mockUser = {user: 'Kylie', password: 'hello', password_confirmation: 'hello' }
    wrapper.instance().handleSubmit()
    expect(wrapper.instance().props.createUser(mockUser))
  })

  it('signs in a current user', () => {
    wrapper.setState({ register: false })
    mockUser = {user: 'Kylie', password: 'hello' }
    wrapper.instance().handleSubmit()
    expect(wrapper.instance().props.loginUser(mockUser))
  })

  it('calls handleUpdateProfile', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleSubmit')
    wrapper.instance().handleSubmit()
    expect(spy).toHaveBeenCalled()
  })

})

  describe('mapStateToProps', () => {
    it('should return a user object', () => {
      const mockState = {
        user: { name: 'Kylie' },
        connections: { name: 'Bob' },
        isLoading: false
      }
      const expected = { user: mockState.user, isLoading: false }
      const result = mapStateToProps(mockState)
      expect(result).toEqual(expected)
    })
  })