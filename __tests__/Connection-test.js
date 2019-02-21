import React from 'react'
import { Connection, mapStateToProps } from '../src/Connection'
import { shallow } from 'enzyme'
import { TouchableOpacity } from 'react-native'


describe('Connection', () => {
  let wrapper
  let mockViewProfile
  let mockApiKey

  beforeEach(() => {
    mockViewProfile = jest.fn()
    mockApiKey - 123998347574354
    const mockConnection = {
      id: 3,
      name: 'Howard',
      job_title: 'Astronomer',
      city: 'Denver'
    }
    wrapper = shallow(<Connection connection={ mockConnection } viewProfile={ mockViewProfile } />)
  })

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

  it('should call viewProfile on press of the name', () => {
    wrapper.find(TouchableOpacity).first().simulate('press')

    expect(mockViewProfile).toHaveBeenCalled()
  })

  it('mapStateToProps should return an object with an api_key', () => {
    const mockState = {
      isLoading: false,
      hasErrored: false,
      user: {
        api_key: 123456789
      }
    }
    const expected = {
      api_key: 123456789
    }

    const result = mapStateToProps(mockState)

    expect(result).toEqual(expected)
  })
})