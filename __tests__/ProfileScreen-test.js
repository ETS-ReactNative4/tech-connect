import React from 'react'
import { ProfileScreen, mapStateToProps, mapDispatchToProps } from '../src/ProfileScreen'
import { shallow } from 'enzyme'
import { updateUser } from '../thunks/updateUser'
import { getLocations, getPositions, getEmployers } from '../apiCalls'
import { Input } from 'react-native-elements'
import ModalSelector from 'react-native-modal-selector'


jest.mock('../thunks/updateUser')
jest.mock('../apiCalls')

import renderer from 'react-test-renderer'


describe('ProfileScreen', () => {
  let wrapper
  let navigation

  beforeEach(() => {
    navigation = { navigate: jest.fn() };
    const mockUser = {
      api_key: 1234,
      name: 'Howard',
      phone_number: 2022222222,
      location: {
        city: 'Denver'
      },
      position: {
        job_title: 'Astronomer'
      },
      employer: {
        name: 'Turing'
      },
      github: 'www.github.com',
      linkedin: 'www.linkedin.com',
      bio: 'This is a bio'
    }
    wrapper = shallow(<ProfileScreen user={mockUser} updateUser={jest.fn()} navigation={navigation} />)
  })

  it('renders the snapshot', () => {
    const tree = renderer.create(
      <ProfileScreen />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should get all locations, positions, employers on mount', async () => {
    await wrapper.instance().componentDidMount()
    expect(getLocations).toHaveBeenCalled()
    expect(getPositions).toHaveBeenCalled()
    expect(getEmployers).toHaveBeenCalled()
  })

  it('should call handleSave on press of the save button', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleSave')
    wrapper.instance().forceUpdate()
    wrapper.find('Button').simulate('press')
    expect(spy).toHaveBeenCalled();
  })

  it('should save the updated user info', async () => {
    wrapper.setState({
      error: '',
      name: 'Howard',
      phone_number: '39393383',
      linkedin: 'www.linkedin.com',
      github: 'www.github.com',
      bio: 'This is howard'
    })
    await wrapper.instance().handleSave()
    expect(wrapper.instance().props.updateUser).toHaveBeenCalled()
  })

  it('should nagivate on save', async () => {
    wrapper.setState({
      error: '',
      name: 'Howard',
      phone_number: '39393383',
      linkedin: 'www.linkedin.com',
      github: 'www.github.com',
      bio: 'This is howard'
    })
    await wrapper.instance().handleSave()
    expect(wrapper.instance().props.navigation.navigate).toHaveBeenCalled()
  })

  it('should not reset state if user has no name', async () => {
    const mockState = {
      name: '',
      bio: '',
      linkedin: '',
      github: '',
      phone_number: '',
      location: 'Denver',
      employer: 'Turing',
      position: 'Unemployed',
      locations: [],
      employers: [],
      positions: []
    }

    mockUser = {
        api_key: 1234,
        phone_number: 2022222222,
        location: {
          city: 'Denver'
        },
        position: {
          job_title: 'Astronomer'
        },
        employer: {
          name: 'Turing'
        },
        github: 'www.github.com',
        linkedin: 'www.linkedin.com',
        bio: 'This is a bio'
      }
    wrapper = shallow(<ProfileScreen user={mockUser} updateUser={jest.fn()} navigation={navigation} />)
    expect(wrapper.instance().state).toEqual(mockState)
  })

  it('should update the name on change of input', () => {
    wrapper.find(Input).at(0).simulate('changeText', 'Kylie')
    expect(wrapper.instance().state.name).toEqual('Kylie')
  })


  it('should update the phone number on change of input', () => {
    wrapper.find(Input).at(1).simulate('changeText', '1234')
    expect(wrapper.instance().state.phone_number).toEqual('1234')
  })


  it('should update the github on change of input', () => {
    wrapper.find(Input).at(5).simulate('changeText', 'github.com')
    expect(wrapper.instance().state.github).toEqual('github.com')
  })


  it('should update the linkedin on change of input', () => {
    wrapper.find(Input).at(6).simulate('changeText', 'linkedin.com')
    expect(wrapper.instance().state.linkedin).toEqual('linkedin.com')
  })

  it('should update the bio on change of input', () => {
    wrapper.find(Input).at(7).simulate('changeText', 'Hey!')
    expect(wrapper.instance().state.bio).toEqual('Hey!')
  })

  it('should update the location on selection', () => {
    wrapper.find(ModalSelector).at(0).simulate('change', {label: 'Denver'})
    expect(wrapper.instance().state.location).toEqual('Denver')
  })

  it('should update the position on selection', () => {
    wrapper.find(ModalSelector).at(1).simulate('change', {label: 'Developer'})
    expect(wrapper.instance().state.position).toEqual('Developer')
  })

  it('should update the employer on selection', () => {
    wrapper.find(ModalSelector).at(2).simulate('change', {label: 'Turing'})
    expect(wrapper.instance().state.employer).toEqual('Turing')
  })

  describe('mapStateToProps', () => {
    it('should return a user object', () => {
      const mockState = {
        user: { name: 'Kylie' },
        connections: { name: 'Bob' },
        isLoading: false,
        error: ''
      }
      const expected = { user: mockState.user, isLoading: mockState.isLoading, error: mockState.error }
      const result = mapStateToProps(mockState)
      expect(result).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params', () => {
      const mockDispatch = jest.fn()
      const url = 'user.com'
      const actionToDispatch = updateUser(url)
      const result = mapDispatchToProps(mockDispatch)

      result.updateUser(url)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})