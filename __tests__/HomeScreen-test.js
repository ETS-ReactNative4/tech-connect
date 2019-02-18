import React from 'react';
import { HomeScreen, mapStateToProps } from '../HomeScreen';
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('HomeScreen', () => {
  let wrapper

  beforeEach(() => {
    mockUser = {
      name: 'Howard',
      position: {
        job_title: 'astronomer'
      }, 
      suggestions: [],
      api_key: 112345129372873,
    }
    wrapper = shallow(<HomeScreen user={ mockUser } />)
  })

  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })
})