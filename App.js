import React from 'react';
import Login from './Login'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";


const AppNavigator = createStackNavigator(
  {Home: Login},
  {headerMode: 'none'}
)


const AppContainer =  createAppContainer(AppNavigator)


export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
