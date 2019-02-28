import React from 'react'
import { shallow } from 'enzyme'
import { MessagesInbox, mapStateToProps } from '../src/MessagesInbox'
import Message from '../src/Message'

describe('MessagesInbox', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<MessagesInbox />)
  })

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

  it('should render 0 Messages', () => {

    expect(wrapper.find(Message).length).toEqual(0)
  })

  it('should render 1 Message component', async () => {
    const mockMessages = [{message: 'This is a message'}]
    await wrapper.setState({
      messages: mockMessages
    })

    expect(wrapper.find(Message).length).toEqual(1)
  })

  describe('mapStateToProps', () => {
    it('should return an obkect with a key of api_key', () => {
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
})