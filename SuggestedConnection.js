import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'

export default class SuggestedConnection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./profile-pic.jpeg')} style={styles.picture} />
        <Text style={styles.name}>Nick Jonas</Text>
        <Text style={styles.position}>Singer</Text>
        <Button title='Connect' style={styles.connectBtn}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4AA9C5',
    height: 126,
    shadowOffset: {  width: 0,  height: 2 },
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: .5,
    marginLeft: 50,
    marginRight: 50
  },
  picture: {
    height: 90,
    width: 90,
    borderRadius: 50,
    position: 'absolute',
    left: -40,
    top: 18
  },
  name: {

  },
  position: {

  },
  connectBtn: {
    position: 'absolute',
    right: -110
  }
})