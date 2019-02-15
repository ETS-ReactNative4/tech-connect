import React from 'react'
import { LoginScreen } from '../LoginScreen'
import { shallow } from 'enzyme'


import renderer from 'react-test-renderer'


describe('LoginScreen', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<LoginScreen />)
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

  })

  it('creates a new user account', () => {

  })

  it('signs in a current user', () => {

  })

  it('calls handleUpdateProfile', () => {
    
  })

})