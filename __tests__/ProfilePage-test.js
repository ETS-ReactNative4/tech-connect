import React from 'react'
import { shallow } from 'enzyme'
import { ProfilePage, mapStateToProps } from '../ProfilePage'
import { TouchableHighlight } from 'react-native'
import Connection from '../Connection'
import { getUserInfo } from '../apiCalls'

jest.mock('../apiCalls')

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
      navigate: jest.fn(),
      getParam: () => mockUser,
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

  it('should render 1 connection', () => {
    const mockUser = {
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
      connections: [{name: 'Howard', id: 3}]
    }
    const mockNavigation = {
      getParam: () => mockUser
    }
    const wrapper = shallow(<ProfilePage user={ mockUser } navigation={ mockNavigation } />)

    expect(wrapper.find(Connection).length).toEqual(1)
  })

  describe('viewProfile', () => {
    it('should fire getUserInfo and navigation', async () => {
      const wrapper = shallow(<ProfilePage user={ mockUser } navigation={{navigate: jest.fn(), getParam: jest.fn()}} />)
      
      await wrapper.instance().viewProfile(3)

      expect(getUserInfo).toHaveBeenCalled()
      expect(wrapper.instance().props.navigation.navigate).toHaveBeenCalled()
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with a user key', () => {
      const mockState = {
        user: {},
        isLoading: false,
        hasErrored: false
      }
      const expected = {
        user: {}
      }

      const result = mapStateToProps(mockState)

      expect(result).toEqual(expected)
    })
  })

})