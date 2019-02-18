import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { connect } from 'react-redux'
import { getConnectionInfo } from './apiCalls'

export class Connection extends Component {
  constructor() {
    super()
    this.state = {
      user: {}
    }
  }
  
  async componentDidMount() {
    const user = await getConnectionInfo(this.props.id, this.props.api_key)
    this.setState({
      user
    })
  }
  
  render() {
    if(Object.keys(this.state.user).length) {
      const { user } = this.state

      return (
        <View style={ styles.container }>
          <Image source={ require('./profile-pic.jpeg')} style={styles.picture} />
          <View style={ styles.connectionContainer }>
            <TouchableHighlight onPress={() => this.props.viewProfile(user.id)}>
              <Text style={styles.name}>{ user.name }</Text>
            </TouchableHighlight>
            <Text style={ styles.position }>{user.position.job_title}</Text>
            <View style={ styles.locationContainer}>
              <Icon name='map-pin' size={18} color='#4AA9C5' style={{marginRight: 7}} />
              <Text style={ styles.location }>{user.location.city}</Text>
            </View>
          </View>
        </View>
      ) 
    } else {
      return null
    }
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