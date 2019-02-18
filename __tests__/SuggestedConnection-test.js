import React from 'react'
import SuggestedConnection from '../SuggestedConnection'
import { shallow } from 'enzyme'

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
})