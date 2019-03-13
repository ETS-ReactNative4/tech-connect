import React from 'react'
import { shallow } from 'enzyme'
import { ProfilePage, mapStateToProps, mapDispatchToProps } from '../src/ProfilePage'
import { TouchableHighlight, View, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Connection from '../src/Connection'
import { getUserInfo } from '../apiCalls'
import { logoutUser } from '../actions'


jest.mock('../apiCalls')
jest.useFakeTimers()

describe('ProfilePage', () => {
  let wrapper
  let mockUser

  beforeEach(() => {
    mockUser = {
      name: 'Howard',
      id: 10,
      position: {
        job_title: 'Developer'
      },
      employer: {
        name: 'Turing'
      },
      location: {
        city: 'Denver'
      },
      connections: [],
      phone_number: '303-333-3333',
      email: 'thisemail@email.com'
    }
    const mockNavigation = {
      navigate: jest.fn(),
      getParam: () => mockUser,
    }
    wrapper = shallow(<ProfilePage user={ mockUser } navigation={ mockNavigation } logoutUser={ jest.fn() }/>)
  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should not render a TouchableHighlight', () => {
    expect(wrapper.find(TouchableHighlight).length).toEqual(0)
  })

  it('should render a TouchableHighlight', () => {
    const mockProfile = {
      name: 'Lenard',
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
    const mockNavigation = {
      navigate: jest.fn(),
      getParam: () => mockProfile
    }
    const wrapper = shallow(<ProfilePage user={ mockUser } navigation={ mockNavigation }/>)

    expect(wrapper.find(TouchableHighlight).length).toEqual(1)
  })

  it('should render 0 connections', () => {
    expect(wrapper.find(Connection).length).toEqual(0)
  })

  it('should render 1 connection', () => {
    const mockUser = {
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
      id: 3,
      connections: [{name: 'Howard', id: 3}]
    }
    const mockNavigation = {
      getParam: () => mockUser
    }
    const wrapper = shallow(<ProfilePage user={ mockUser } navigation={ mockNavigation } />)

    expect(wrapper.find(Connection).length).toEqual(1)
  })

  it('should have an edit icon', () => {
    const mockNavigation = {
      navigate: jest.fn(),
      getParam: () => false
    }
    const wrapper = shallow(<ProfilePage user={ mockUser } navigation={ mockNavigation }/>)

    expect(wrapper.find(Icon).length).toEqual(4)
  })

  it('should navigate to the modal screen', () => {
    const otherUser = {
      name: 'Lenard',
      position: {
        job_title: 'Developer'
      },
      employer: {
        name: 'Turing'
      },
      location: {
        city: 'Chicago'
      },
      connections: [],
      phone_number: '303-333-3333',
      email: 'thisemail@email.com'
    }
    const mockNavigation = {
      navigate: jest.fn(),
      getParam: () => otherUser,
    }
    wrapper = shallow(<ProfilePage user={ mockUser } navigation={ mockNavigation }/>)

    wrapper.find(Button).simulate('press')
    expect(wrapper.instance().props.navigation.navigate).toHaveBeenCalled()
  })

  it('should call displaySettingsMenu if you are the user', () => {
    const spy = jest.spyOn(wrapper.instance(), 'displaySettingsMenu')
    wrapper.instance().forceUpdate()
    expect(spy).toHaveBeenCalled()
  })


  it('should not call displaySettingsMenu if you are not the user', () => {
    const mockOtherUser = {
      name: 'Howard',
      id: 45,
      position: {
        job_title: 'Developer'
      },
      employer: {
        name: 'Turing'
      },
      location: {
        city: 'Denver'
      },
      connections: [],
      phone_number: '303-333-3333',
      email: 'thisemail@email.com'
    }
    const mockNavigation = {
      navigate: jest.fn(),
      getParam: () => mockOtherUser,
    }
    wrapper = shallow(<ProfilePage user={ mockUser } navigation={ mockNavigation }/>)
    
    const spy = jest.spyOn(wrapper.instance(), 'displaySettingsMenu')
    wrapper.instance().forceUpdate()
    expect(spy).not.toHaveBeenCalled()
  })

  describe('viewProfile', () => {
    it('should fire getUserInfo and navigation', async () => {
      const wrapper = shallow(<ProfilePage user={ mockUser } navigation={{navigate: jest.fn(), getParam: jest.fn()}} />)
      
      await wrapper.instance().viewProfile(3)

      expect(getUserInfo).toHaveBeenCalled()
      expect(wrapper.instance().props.navigation.navigate).toHaveBeenCalled()
    })
  })

  describe('contactInfo', () => {
    it('should render a contact section', () => {
      const mockUser = {
        name: 'Howard',
        position: {
          job_title: 'Developer'
        },
        id: 3,
        employer: {
          name: 'Turing'
        },
        location: {
          city: 'Denver'
        },
        phone_number: '303-333-3333',
        email: 'thisemail@email.com',
        connections: [{name: 'Howard', id: 3}]
      }
      const wrapper = shallow(<ProfilePage user={ mockUser } navigation={{navigate: jest.fn(), getParam: jest.fn()}} />)
      wrapper.instance().contactInfo(mockUser)
  
      expect(wrapper.find(View).length).toEqual(12)
    })

    it('should not render a contact section', () => {
      const mockUser = {
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
        phone_number: '303-333-3333',
        email: 'thisemail@email.com',
        connections: [{name: 'Howard', id: 3}]
      }
      const wrapper = shallow(<ProfilePage user={ mockUser } navigation={{navigate: jest.fn(), getParam: jest.fn()}} />)
      wrapper.instance().contactInfo(mockUser)
  
      expect(wrapper.find(View).length).toEqual(9)
    })
  })


  it('should log the user out and return to the login screen', () => {
    wrapper.instance().logOut()
    expect(wrapper.instance().props.navigation.navigate).toHaveBeenCalled()
    expect(setTimeout).toHaveBeenCalled()
  })

  describe('editProfile', () => {
    it('should navigate to the EditProfile page', () => {
      const mockUser = {
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
        phone_number: '303-333-3333',
        email: 'thisemail@email.com',
        connections: [{name: 'Howard', id: 3}]
      }
      const wrapper = shallow(<ProfilePage user={ mockUser } navigation={{navigate: jest.fn(), getParam: jest.fn()}} />)
      wrapper.instance().editProfile(mockUser)

      expect(wrapper.instance().props.navigation.navigate).toHaveBeenCalled()
    })
  })

  describe('displaySettingsMenu', () => {
    let mockUser
    let wrapper

    beforeEach(() => {
      mockUser = {
        name: 'Howard',
        position: {
          job_title: 'Developer'
        },
        id: 3,
        employer: {
          name: 'Turing'
        },
        location: {
          city: 'Denver'
        },
        phone_number: '303-333-3333',
        email: 'thisemail@email.com',
        connections: [{name: 'Howard', id: 3}]
      }
      wrapper = shallow(<ProfilePage user={ mockUser } navigation={{navigate: jest.fn(), getParam: jest.fn()}} />)
    })
    
    it('should render an edit icon', () => {
      expect(wrapper.find(Icon).length).toEqual(4)
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with a user key', () => {
      const mockState = {
        user: {},
        isLoading: false,
        hasErrored: false
      }
      const expected = {
        user: {}
      }

      const result = mapStateToProps(mockState)

      expect(result).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params for logoutUser', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = logoutUser()
      const result = mapDispatchToProps(mockDispatch)

      result.logoutUser()

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})