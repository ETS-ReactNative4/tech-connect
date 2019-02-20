import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default class Message extends Component {
  render() {
    return (
      <View style={ styles.messageContainer }>
        <View style={ styles.imageContainer }>
          <Image source={ require('./profile-pic.jpeg') } style={ styles.userPic }/>
        </View>
        <Text style={ styles.date }>10/10/2019</Text>
        <View style={ styles.messageInfo }>
          <Text style={ styles.name }>Howard Stearn</Text>
          <Text style={ styles.message }>This is Howard's message</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  messageContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  imageContainer: {
    shadowOffset: {  width: 2,  height: 2 },
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOpacity: .2,
  },
  userPic: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  date: {
    position: 'absolute',
    right: 20,
    top: 20
  },
  name: {
    fontSize: 18
  },
  message: {
    marginTop: 10,
    color: 'gray'
  },
  messageInfo: {
    marginLeft: 8
  }
})