import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class Connection extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Image source={ require('./profile-pic.jpeg')} style={styles.picture} />
        <View style={ styles.connectionContainer }>
          <Text>Nick Jonas</Text>
          <Text>Software Developer</Text>
          <Text>Denver, CO</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5
  },
  picture: {
    height: 80,
    width: 80,
    borderRadius: 40
  },
  connectionContainer: {
    marginLeft: 5
  }
})