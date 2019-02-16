import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
 
export default class NavigationBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navElement}>
          <Icon 
            name='home'
            size={30}
            color='#4AA9C5'
          />
        </View>
        <View style={styles.navElement}>
          <Icon 
              name='user'
              size={30}
              color='#4AA9C5'
          />
        </View>
        <View style={styles.navElement}>
          <Icon 
              name='user-plus'
              size={30}
              color='#4AA9C5'
          />
        </View>
        <View style={styles.navElement}>
          <Icon 
              name='message-circle'
              size={30}
              color='#4AA9C5'
          />
        </View>
        <View style={styles.navElement}>
          <Icon 
              name='calendar'
              size={30}
              color='#4AA9C5'
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    height: 80,
    backgroundColor: 'white',
    padding: 20,
  },
  navElement: {
    backgroundColor: 'white',
  }
})