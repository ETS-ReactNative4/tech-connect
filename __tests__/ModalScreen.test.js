import React from 'react'
import { ModalScreen, mapStateToProps } from '../ModalScreen'
import { shallow } from 'enzyme'
import { sendConnectionRequest } from '../apiCalls'
import { Input } from 'react-native-elements'
import { Text, Button } from 'react-native';
import DatePicker from 'react-native-datepicker'


jest.mock('../apiCalls')
sendConnectionRequest.mockImplementation(() => 'Email Sent')

import renderer from 'react-test-renderer'

describe('ModalScreen', () => {
  let wrapper
  let onPressEvent
  let mockNavigation
  let mockUser

  beforeEach(() => {
    mockNavigation = {
      navigate: jest.fn(),
      getParam: () => mockUser,
      goBack: jest.fn()
    } 
    mockUser = {
      name: 'Howard',
      id: 2,
      position: {
        job_title: 'Developer'
      },
      employer: {
        name: 'Turing'
      },
      location: {
        city: 'Denver'
      }
    }
    wrapper = shallow(<ModalScreen user={{ api_key: 1234 }} navigation={ mockNavigation } />)
  })

  it('should call sendConnectionRequest on save', async () => {
    await wrapper.instance().sendRequest()
    wrapper.instance().setState({ response: 'Email Sent' })
    expect(sendConnectionRequest).toHaveBeenCalled();
  })

  it('should render Email Sent if the request goes through', () => {
    wrapper.instance().setState({ response: 'Email Sent' })
    expect(wrapper.find(Text).props().children).toEqual('Email Sent')
  })

  it('should display an error if all fields are not filled out', () => {
    wrapper.instance().setState({ response: 'Please fill out all fields' })
    expect(wrapper.find(Text).at(4).props().children).toEqual('Please fill out all fields')
  })

  it('should update the first meeting location on change of input', () => {
    wrapper.find(Input).at(0).simulate('changeText', 'Turing')
    expect(wrapper.instance().state.inputs.meeting_1).toEqual('Turing')
  })

  it('should update the second meeting location on change of input', () => {
    wrapper.find(Input).at(1).simulate('changeText', 'Denver')
    expect(wrapper.instance().state.inputs.meeting_2).toEqual('Denver')
  })

  it('should update the third meeting location on change of input', () => {
    wrapper.find(Input).at(2).simulate('changeText', 'Starbucks')
    expect(wrapper.instance().state.inputs.meeting_3).toEqual('Starbucks')
  })

  it('should update the bio on change of input', () => {
    wrapper.find(DatePicker).at(0).simulate('dateChange', '2019-02-20')
    expect(wrapper.instance().state.inputs.datetime_1).toEqual('2019-02-20')
  })

  it('should update the bio on change of input', () => {
    wrapper.find(DatePicker).at(1).simulate('dateChange', '2019-02-20')
    expect(wrapper.instance().state.inputs.datetime_2).toEqual('2019-02-20')
  })

  it('should update the bio on change of input', () => {
    wrapper.find(DatePicker).at(2).simulate('dateChange', '2019-02-21')
    expect(wrapper.instance().state.inputs.datetime_3).toEqual('2019-02-21')
  })

  it('should go back to the previous page on click of the Done button', () => {
    wrapper.instance().setState({ response: 'Email Sent' })
    wrapper.find(Button).simulate('press')
    expect(wrapper.instance().props.navigation.goBack).toHaveBeenCalled()
  })

  it('should go back to the previous page on click of the Cancel button', () => {
    wrapper.find(Button).at(1).simulate('press')
    expect(wrapper.instance().props.navigation.goBack).toHaveBeenCalled()
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