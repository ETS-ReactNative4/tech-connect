import React from 'react'
import { ProfileScreen, mapStateToProps, mapDispatchToProps } from '../ProfileScreen'
import { shallow } from 'enzyme'
import { updateUser } from '../thunks/updateUser'
import { getLocations, getPositions, getEmployers } from '../apiCalls'


jest.mock('../thunks/updateUser')
jest.mock('../apiCalls')


import renderer from 'react-test-renderer'


describe('ProfileScreen', () => {
  let wrapper
  let onPressEvent
  let navigation

  beforeEach(() => {
    navigation = { navigate: jest.fn() };
    onPressEvent = jest.fn()
    wrapper = shallow(<ProfileScreen user={{api_key: 1234}} updateUser={jest.fn} navigation={navigation} />)
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

  it('should save the updated user info', () => {
    wrapper.instance().handleSave()
    expect(updateUser).toHaveBeenCalled()
  })

  it('should nagivate on save', async () => {
    await wrapper.instance().handleSave()
    expect(wrapper.instance().props.navigation.navigate).toHaveBeenCalled()
  })

  it.skip('should update the name on change of input', () => {
    wrapper.find('Input').simulate('changeText')
    wrapper.instance().forceUpdate()
    expect(wrapper.instance().state.name).toEqual('')
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

    describe('mapDispatchToProps', () => {
      const mockDispatch = jest.fn()
      const url = 'user.com'
      const actionToDispatch = updateUser(url)
      const result = mapDispatchToProps(mockDispatch)

      result.updateUser(url)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})