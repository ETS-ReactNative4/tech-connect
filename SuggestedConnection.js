import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class SuggestedConnection extends Component {
  render() {
    return (
      <View>
        <Image source={require('./profile-pic.jpeg')} style={styles.picture} />
        <Text>Nick Jonas</Text>
        <Text>Singer</Text>
        <Button></Button>
      </View>
    )
  }
}