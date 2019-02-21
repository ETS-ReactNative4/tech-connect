import React from 'react';
import { HomeScreen, mapStateToProps } from '../src/HomeScreen';
import { shallow } from 'enzyme'
import SuggestedConnection from '../src/SuggestedConnection'
import { getUserInfo } from '../apiCalls'
import { Text } from 'react-native'

jest.mock('../apiCalls')

describe('HomeScreen', () => {
  let wrapper
  let mockUser
  let mockNavigation

  beforeEach(() => {
    mockUser = {
      name: 'Howard',
      position: {
        job_title: 'astronomer'
      }, 
      suggestions: [],
      api_key: 112345129372873,
    }
    mockNavigation = {
      navigate: jest.fn()
    }
    wrapper = shallow(<HomeScreen user={ mockUser } navigation={ mockNavigation } />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render 0 suggested connections', () => {
    expect(wrapper.find(SuggestedConnection).length).toEqual(0)
  })

  it('should render a title', () => {
    expect(wrapper.find(Text).at(1).contains('astronomer')).toBe(true)
  })

  it('should not render a title', () => {
    const mockUserWithoutTitle = {
      name: 'Howard',
      position: null,
      suggestions: [],
      api_key: 112345129372873,
    }

    wrapper = shallow(<HomeScreen user={ mockUserWithoutTitle } navigation={ mockNavigation } />)

    expect(wrapper.find(Text).at(1).contains('astronomer')).toBe(false)
  })

  it('should render 1 suggestion component', () => {
    const mockUser = {
      name: 'Howard',
      position: {
        job_title: 'astronomer'
      }, 
      suggestions: [{name: 'Toby'}],
      api_key: 112345129372873,
    }
    const wrapper = shallow(<HomeScreen user={ mockUser } />)

    expect(wrapper.find(SuggestedConnection).length).toEqual(1)
  })

  it('viewProfile - should fire getUserInfo and navigate to the profile page', async () => {
    
    await wrapper.instance().viewProfile()

    expect(getUserInfo).toHaveBeenCalled()
    expect(wrapper.instance().props.navigation.navigate).toHaveBeenCalled()
  })

  describe('mapStateToProps', () => {
    it('should return an object with just the user', () => {
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