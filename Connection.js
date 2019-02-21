import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { connect } from 'react-redux'

export class Connection extends Component {
  
  render() {

    const { connection } = this.props

    return (
      <View style={ styles.container }>
        <Image source={ require('./profile-pic.jpeg')} style={styles.picture} />
        <View style={ styles.connectionContainer }>
          <TouchableOpacity onPress={() => this.props.viewProfile(connection.id)}>
            <Text style={styles.name}>{ connection.name }</Text>
          </TouchableOpacity>
          <Text style={ styles.position }>{ connection.job_title }</Text>
          <View style={ styles.locationContainer}>
            <Icon name='map-pin' size={18} color='#4AA9C5' style={{marginRight: 7}} />
            <Text style={ styles.location }>{ connection.city }</Text>
          </View>
        </View>
      </View>
    ) 
  }
}

export const mapStateToProps = (state) => ({
  api_key: state.user.api_key
})

export default connect(mapStateToProps)(Connection)

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