import React from 'react'
import { shallow } from 'enzyme'
import ProfilePage from '../ProfilePage'

describe('ProfilePage', () => {
  let wrapper
  let mockUser

  beforeEach(() => {
    mockUser = {
      name: 'Howard',
      position: {
        job_title: 'Developer'
      },
      employer: {
        name: 'Turing'
      },
      location: {
        city: 'Denver'
      },
      connections: []
    }
    wrapper = shallow(<ProfilePage user={mockUser} />)
  })
  
  it('should match the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })
})