import React from 'react'
import { shallow } from 'enzyme'
import Message from '../Message'
import { TouchableOpacity, Text } from 'react-native'

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

  it('should set state on press of the message and conditionally render a Text element', async () => {
    
    await wrapper.find(TouchableOpacity).simulate('press')

    expect(wrapper.state().showMessage).toEqual(true)
    expect(wrapper.find(Text).length).toEqual(4)

    await wrapper.find(TouchableOpacity).simulate('press')

    expect(wrapper.state().showMessage).toEqual(false)
    expect(wrapper.find(Text).length).toEqual(3)
  })
})