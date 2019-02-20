import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'

export default class Message extends Component {
  render() {
    return (
      <View>
        <Image source={ require('./profile-pic.jpeg') } style={ styles.userPic }/>
      </View>
    )
  }
}