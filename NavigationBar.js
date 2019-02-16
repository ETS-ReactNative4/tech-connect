import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
 
export default class NavigationBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navElement}>
          <Text>Home</Text>
        </View>
        <View style={styles.navElement}>
          <Text>View Profile</Text>
        </View>
        <View style={styles.navElement}>
          <Text>Connections</Text>
        </View>
        <View style={styles.navElement}>
          <Text>Messaging</Text>
        </View>
        <View style={styles.navElement}>
          <Text>Schedule</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  navElement: {
    backgroundColor: 'white'
  }
})