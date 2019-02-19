import React from 'react'
import { Connection, mapStateToProps } from '../Connection'
import { shallow } from 'enzyme'
import { getConnectionInfo } from '../apiCalls'
import { TouchableHighlight } from 'react-native'

const mockUser = {name: 'Howard'}
jest.mock('../apiCalls')
getConnectionInfo.mockImplementation(() => mockUser)

describe('Connection', () => {
  let wrapper
  let mockViewProfile
  let mockApiKey

  beforeEach(() => {
    mockViewProfile = jest.fn()
    mockApiKey - 123998347574354
    wrapper = shallow(<Connection api_key={ mockApiKey } viewProfile={ mockViewProfile } id={ 3 } />)
  })

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

  it('should fire getConnectionsInfo with the correct params', () => {

    expect(getConnectionInfo).toHaveBeenCalledWith(3, mockApiKey)
  })

  it('should set state with the user', async () => {
    const wrapper = shallow(<Connection api_key={ mockApiKey } viewProfile={ mockViewProfile } id={ 3 } />)
    await wrapper.instance().componentDidMount()

    expect(wrapper.state().user).toEqual(mockUser)
  })

  it('should call viewProfile on press of the name', () => {
    wrapper.setState({
      user: {
        id: 3,
        name: 'Howard',
        position: {
          job_title: 'Astronomer'
        },
        location: {
          city: 'Denver'
        }
      }
    })
    
    wrapper.find(TouchableHighlight).first().simulate('press')

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