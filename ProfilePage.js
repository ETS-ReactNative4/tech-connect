import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default class ProfilePage extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={styles.profileContainer}>
          <View style={ styles.imageContainer }>
            <Image style={ styles.profilePicture } source={ require('./profile-pic.jpeg') } />
          </View>
          <Text>Joe Jonas</Text>
          <Text>Software Developer</Text>
          <Text>Apple</Text>
          <Text>Denver, CO</Text>
          <TouchableOpacity>
            <Text>Connect</Text>
          </TouchableOpacity>
          <View>
            <Text>Bio</Text>
          </View>
          <View>
            <Text>Langauge Interests</Text>
          </View>
          <View>
            <Text>Connections</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    paddingTop: 20,
    backgroundColor: '#4AA9C5'
  },
  imageContainer: {
    display: 'flex',
    height: 180,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 200000,
    marginBottom: 20,
    marginTop: 20,
    shadowOffset: {  width: 5,  height: 5},
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: .5,
  },
  profilePicture: {
    height: 180,
    width: 180,
    borderRadius: 90,
    zIndex: 20000,
  }
})