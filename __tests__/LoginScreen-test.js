import React from 'react'
import { LoginScreen, mapStateToProps, mapDispatchToProps } from '../LoginScreen'
import { Input } from 'react-native-elements';
import { shallow } from 'enzyme'
import { createUser } from '../thunks/createUser'
import { loginUser } from '../thunks/loginUser'


jest.mock('../thunks/createUser')
jest.mock('../thunks/loginUser')

import renderer from 'react-test-renderer'

describe('LoginScreen', () => {
  let wrapper
  let navigation

  beforeEach(() => {
    navigation = { navigate: jest.fn() };
    onPressEvent = jest.fn()
    wrapper = shallow(<LoginScreen 
      loginUser={jest.fn} 
      createUser={jest.fn()} 
      navigation={navigation} 
      error={''}
    />)
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

  it('calls handleUpdateProfile', async () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleUpdateProfile')
    await wrapper.instance().handleSubmit()
    expect(spy).toHaveBeenCalled()
  })

  it('should navigate to the Profile screen', () => {
    wrapper.setState({ register: true })
    wrapper.instance().handleUpdateProfile()
    expect(wrapper.instance().props.navigation.navigate).toHaveBeenCalledWith('EditProfile')
  })

  it('should navigate to the Home screen', () => {
    wrapper.instance().handleUpdateProfile()
    expect(wrapper.instance().props.navigation.navigate).toHaveBeenCalledWith('Home')
  })

  it('should update the email on input', () => {
    wrapper.find(Input).at(0).simulate('changeText', 'email')
    expect(wrapper.instance().state.email).toEqual('email')
  })

  it('should set the error in state to true if the error prop is true', async () => {
    wrapper = shallow(<LoginScreen loginUser={jest.fn} error={'error'} />)
    await wrapper.instance().handleSubmit()
    expect(wrapper.instance().state.error).toEqual(true)
  })

  it('should update the password on input', () => {
    wrapper.find(Input).at(1).simulate('changeText', 'password')
    expect(wrapper.instance().state.password).toEqual('password')
  })

  it('should update the cofirmed password on input', () => {
    wrapper.instance().setState({register: true})
    wrapper.find(Input).at(2).simulate('changeText', 'password')
    expect(wrapper.instance().state.password_confirmation).toEqual('password')
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

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params for createUser', () => {
      const mockDispatch = jest.fn()
      const url = 'create.com'
      const actionToDispatch = createUser(url)
      const result = mapDispatchToProps(mockDispatch)

      result.createUser(url)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call dispatch with the correct params for loginUser', () => {
      const mockDispatch = jest.fn()
      const url = 'login.com'
      const actionToDispatch = loginUser(url)
      const result = mapDispatchToProps(mockDispatch)

      result.loginUser(url)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})