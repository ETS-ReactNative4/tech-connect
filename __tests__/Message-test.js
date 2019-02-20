import React from 'react'
import { shallow } from 'enzyme'
import Message from '../Message'

describe('Message', () => {
  let wrapper
  let mockMessage

  beforeEach(() => {
    mockMessage = {
      receiver: 'Howard',
      status: 'Confirmed',
      meeting_date: '2019-02-15T23:11:40.016Z'
    }
    wrapper = shallow(<Message message={ mockMessage } />)
  })

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })
})