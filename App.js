import React from 'react';
import LoginScreen from './LoginScreen'
import ProfileScreen from './ProfileScreen'
import ProfilePage from './ProfilePage'
import HomeScreen from './HomeScreen'
import MessagesScreen from './MessagesScreen'
import ScheduleScreen from './ScheduleScreen'
import Icon from 'react-native-vector-icons/Feather';
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
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home'
        } else if (routeName === 'Profile') {
          iconName = 'user'
        } else if (routeName === 'Messages') {
          iconName = 'message-circle'
        } else if (routeName === 'Schedule') {
          iconName = 'calendar'
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#4AA9C5',
      inactiveTintColor: 'gray',
    }
  }
)

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    NavBar: AppNavBar,
    Profile: ProfileScreen,
    ProfilePage: ProfilePage,
    Messages: MessagesScreen,
    Schedule: ScheduleScreen
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
