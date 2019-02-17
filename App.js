import React from 'react';
import LoginScreen from './LoginScreen'
import ProfileScreen from './ProfileScreen'
import ProfilePage from './ProfilePage'
import HomeScreen from './HomeScreen'
import MessagesScreen from './MessagesScreen'
import ScheduleScreen from './ScheduleScreen'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const AppNavBar = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Profile: ProfilePage,
    Messages: MessagesScreen,
    Schedule: ScheduleScreen
  }
)

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: AppNavBar,
  },
  {
    headerMode: 'none',
    initialRouteName: "Login"
  }
)

const AppContainer = createAppContainer(AppNavigator)
export default class App extends React.Component {
    
  render() {
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    );
  }
}
