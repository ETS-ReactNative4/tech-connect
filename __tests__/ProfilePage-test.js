import React from 'react'
import { shallow } from 'enzyme'
import ProfilePage from '../ProfilePage'
import { TouchableHighlight } from 'react-native'
import Connection from '../Connection'

describe('ProfilePage', () => {
  let wrapper
  let mockUser

  beforeEach(() => {
    mockUser = {
      name: 'Howard',
      position: {
        job_title: 'Developer'
      },
      employer: {
        name: 'Turing'
      },
      location: {
        city: 'Denver'
      },
      connections: []
    }
    mockNavigation = {
      getParam: () => mockUser
    }
    wrapper = shallow(<ProfilePage user={ mockUser } navigation={ mockNavigation }/>)
  })
  
  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

  it('should not render a TouchableHighlight', () => {

    expect(wrapper.find(TouchableHighlight).length).toEqual(0)
  })

  it('should render 0 connections', () => {

    expect(wrapper.find(Connection).length).toEqual(0)
  })
})