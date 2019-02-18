import React from 'react'
import { Connection, mapStateToProps } from '../Connection'
import { shallow } from 'enzyme'
import { getConnectionInfo } from '../apiCalls'

jest.mock('../apiCalls')

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
})