import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image, Button, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Connection from './Connection'

export default class ProfilePage extends Component {
  render() {
    return (
      <ScrollView>
        <View style={ styles.container }>
          <View style={ styles.imageContainer }>
            <Image style={ styles.profilePicture } source={ require('./profile-pic.jpeg') } />
          </View>
            <View style={styles.profileContainer}>
            <View style={ styles.about }>
              <Text style={ styles.name }>Joe Jonas</Text>
              <Text style={ styles.position }>Software Developer</Text>
              <Text style={ styles.company }>Apple</Text>
              <View style={ styles.locationContainer}>
                <Icon name='map-pin' size={20} color='#4AA9C5' style={{marginRight: 7}} />
                <Text style={ styles.location }>Denver, CO</Text>
              </View>
              <Text style={ styles.bio }>This is a bio about Joe Jonas. He is a singer. He sings songs. He sings songs while touring the world</Text>
              <TouchableHighlight style={styles.connectBtn}>
                <Button title='Connect' color='white' />
              </TouchableHighlight>
            </View>
            <Text style={ styles.languages }>Langauge Interests</Text>
            <View style={ styles.languageContainer }>
              <Text style={ styles.language }>React.js</Text>
              <Text style={ styles.language }>Node.js</Text>
              <Text style={ styles.language }>Express.js</Text>
              <Text style={ styles.language }>CSS</Text>
            </View>
            <Text style={ styles.languages }>Connections</Text>
            <View style={ styles.languageContainer }>
              <Connection />
              <Connection />
              <Connection />
            </View>
          </View>
        </View>
      </ScrollView>
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
    backgroundColor: '#4AA9C5',
    paddingBottom: 20,
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
    shadowOffset: {  width: 2,  height: 2},
    shadowRadius: 20,
    shadowColor: 'black',
    shadowOpacity: .5,
  },
  profilePicture: {
    height: 180,
    width: 180,
    borderRadius: 90,
    zIndex: 20000,
  },
  profileContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginRight: 20,
    marginLeft: 20,
    marginTop: -100,
    paddingBottom: 20,
  },
  about: {
    marginTop: 90,
    display: 'flex',
    alignItems: 'center'
  },
  name: {
    fontSize: 35,
    fontWeight: '300'
  },
  position: {
    fontSize: 23,
    fontWeight: '200'
  },
  company: {
    fontSize: 21,
    fontWeight: '300',
    color: 'gray'
  },
  locationContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  location: {
    fontSize: 19,
    fontWeight: '200',
    color: 'gray'
  },
  bio: {
    fontWeight: '300',
    marginTop: 5,
  },
  connectBtn: {
    backgroundColor: '#93548F',
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 20,
    shadowOffset: {  width: 0,  height: 2 },
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: .5,
    marginTop: 10,
  },
  languages: {
    marginLeft: 20,
    marginTop: 15,
    fontSize: 15,
  },
  languageContainer: {
    backgroundColor: '#4AA9C5',
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    borderRadius: 5
  },
  language: {
    color: 'white',
    fontSize: 15,
  }
})