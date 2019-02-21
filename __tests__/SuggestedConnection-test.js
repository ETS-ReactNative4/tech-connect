import React from 'react'
import SuggestedConnection from '../SuggestedConnection'
import NavigationService from '../NavigationService';
import { TouchableOpacity, Button } from 'react-native'
import { shallow } from 'enzyme'

jest.mock('../NavigationService')

describe('SuggestedConnection', () => {
  let wrapper 
  let mockSuggestion
  let mockViewProfile

  beforeEach(() => {
    mockSuggestion = {
      name: 'Howard',
      job_title: 'Astronomer',
      city: 'Denver',
      id: 10
    }
    mockViewProfile = jest.fn()
    wrapper = shallow(<SuggestedConnection 
      suggestion={ mockSuggestion } 
      viewProfile={ mockViewProfile } 
    />)
  })

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

  it('should fire viewProfile on press of the name', () => {
    wrapper.find(TouchableOpacity).first().simulate('press')

    expect(mockViewProfile).toHaveBeenCalled()
  })

  it('should call NavigationService', () => {

    wrapper.find(Button).simulate('press')

    expect(NavigationService.navigate).toHaveBeenCalled()
  })
})