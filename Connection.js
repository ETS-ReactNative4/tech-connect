import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export default class Connection extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Image source={ require('./profile-pic.jpeg')} style={styles.picture} />
        <View style={ styles.connectionContainer }>
          <Text style={ styles.name }>Nick Jonas</Text>
          <Text style={ styles.position }>Software Developer</Text>
          <View style={ styles.locationContainer}>
            <Icon name='map-pin' size={18} color='#4AA9C5' style={{marginRight: 7}} />
            <Text style={ styles.location }>Denver, CO</Text>
          </View>
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
    borderRadius: 5,
    marginBottom: 10,
    shadowOffset: {  width: 2,  height: 2},
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: .5,
  },
  picture: {
    height: 80,
    width: 80,
    borderRadius: 40
  },
  name: {
    fontSize: 18
  },
  position: {
    color: 'gray',
    marginTop: 1
  },
  location: {
    color: 'gray',
    fontSize: 14,
    marginTop: 2
  },
  connectionContainer: {
    marginLeft: 5
  },
  locationContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 3
  }
})