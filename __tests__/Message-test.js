import React from 'react'
import { shallow } from 'enzyme'
import { Message, mapStateToProps } from '../src/Message'
import { TouchableOpacity, Text } from 'react-native'

describe('Message', () => {
  let wrapper
  let mockMessage

  beforeEach(() => {
    mockMessage = {
      receiver: 'Howard',
      meeting_location: 'Turing',
      sender: 'Howard',
      status: 'Confirmed',
      meeting_date: '2019-02-15T23:11:40.016Z'
    }
    wrapper = shallow(<Message message={ mockMessage } user={{name: 'Joe'}}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a message based on if you are the sender or receiver', () => {
    wrapper.instance().setState({ showMessage: true})
    expect(wrapper.find(Text).at(3).props().children.join('')).toEqual('Howard has Confirmed a meeting with you at Turing on Fri, 15 Feb 2019 at 23:11:40')
  })

  it('should render a declined message when you are the receiver', () => {
    mockMessage = {
      receiver: 'Joe',
      meeting_location: 'N/A',
      sender: 'Howard',
      status: 'Declined',
      meeting_date: '2019-02-15T23:11:40.016Z'
    }
    wrapper = shallow(<Message message={ mockMessage } user={{name: 'Joe'}}/>)
    wrapper.instance().setState({ showMessage: true})
    expect(wrapper.find(Text).at(3).props().children.join('')).toEqual('You have Declined a meeting with Howard ')
  })

  it('should render a decline message when you are the sender', () => {
    mockMessage = {
      receiver: 'Howard',
      meeting_location: 'N/A',
      sender: 'Joe',
      status: 'Declined',
      meeting_date: '2019-02-15T23:11:40.016Z'
    }
    wrapper = shallow(<Message message={ mockMessage } user={{name: 'Joe'}}/>)
    wrapper.instance().setState({ showMessage: true})
    expect(wrapper.find(Text).at(3).props().children.join('')).toEqual('Howard has Declined a meeting with you ')
  })

  it('should render a confirmed message when you are the receiver', () => {
    mockMessage = {
      receiver: 'Joe',
      meeting_location: 'Turing',
      sender: 'Howard',
      status: 'Confirmed',
      meeting_date: '2019-02-15T23:11:40.016Z'
    }
    wrapper = shallow(<Message message={ mockMessage } user={{name: 'Joe'}}/>)
    wrapper.instance().setState({ showMessage: true})
    expect(wrapper.find(Text).at(3).props().children.join('')).toEqual('You have Confirmed a meeting with Howard at Turing on Fri, 15 Feb 2019 at 23:11:40')
  })

  it('should set state on press of the message and conditionally render a Text element', async () => {
    
    await wrapper.find(TouchableOpacity).simulate('press')

    expect(wrapper.state().showMessage).toEqual(true)
    expect(wrapper.find(Text).length).toEqual(4)

    await wrapper.find(TouchableOpacity).simulate('press')

    expect(wrapper.state().showMessage).toEqual(false)
    expect(wrapper.find(Text).length).toEqual(3)
  })

  describe('mapStateToProps', () => {
    it('should return a user object', () => {
      const mockState = {
        user: { name: 'Kylie' },
        connections: { name: 'Bob' },
        isLoading: false,
        error: ''
      }
      const expected = { user: mockState.user }
      const result = mapStateToProps(mockState)
      expect(result).toEqual(expected)
    })
  })
})