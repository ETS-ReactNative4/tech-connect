import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default class ProfilePage extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={styles.profileContainer}>
          <Image source={ require('./profile-pic.jpeg') } />
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