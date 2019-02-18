import React from 'react'
import { Connection, mapStateToProps } from '../Connection'
import { shallow } from 'enzyme'
import { getConnectionInfo } from '../apiCalls'

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
})