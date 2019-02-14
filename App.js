import React from 'react';
import LoginScreen from './LoginScreen'
import ProfileScreen from './ProfileScreen'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Profile: ProfileScreen,
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
