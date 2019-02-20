import React from 'react'
import { shallow } from 'enzyme'
import { MessagesInbox, mapStateToProps } from '../MessagesInbox'
import Message from '../Message'

describe('MessagesInbox', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<MessagesInbox />)
  })

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })
})