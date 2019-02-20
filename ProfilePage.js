import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Image, Button, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Connection from './Connection'
import { connect } from 'react-redux'
import { getUserInfo } from './apiCalls'

export class ProfilePage extends Component {
  constructor(props) {
    super(props)
  }

  viewProfile = async (id) => {
    const user = await getUserInfo(id, this.props.user.api_key)
    this.props.navigation.navigate('ProfilePage', {user})
  }

  contactInfo = (user) => {
    return (
      <View>
        <Text style={ styles.connections }>Contact Information</Text>
        <View style={ styles.connectionsContainer }>
          <View style={{backgroundColor: '#fff', padding: 10}}>
            <Text style={{color: '#000'}}>Phone: { user.phone_number }</Text>
            <Text style={{color: '#000'}}>Email: { user.email }</Text>
          </View>
        </View>
      </View>
    )
  }

  editProfile = () => {
    this.props.navigation.navigate('EditProfile')
  }

  displayEditProfile = (user) => {
    return (
      <Icon name='edit' size={20} color='#4AA9C5' style={ styles.editIcon } onPress={ this.editProfile } />
    )
  }

  displayConnections = (user) => {
    if (user.connections.length) {
      return user.connections.map((connection) => {
        return <Connection connection={ connection } viewProfile={ this.viewProfile } key={connection.id}/>
      })
    } else {
      return <Text style={styles.noConnections}>You have no connections.</Text>  
    }
  }

  render() {
    const user = this.props.navigation.getParam('user') ? this.props.navigation.getParam('user') : this.props.user
    const isConnection = this.props.user.connections.filter(connection => parseInt(user.id) === parseInt(connection.id))
    const connectionInfo = isConnection.length ? this.contactInfo(user) : null
    const editProfileSection = this.props.user.id !== user.id ? null : this.displayEditProfile(user)
    const button = isConnection.length ? 'Message' : 'Connect'
    const connectBtn = this.props.user !== user && 
      <TouchableHighlight style={styles.connectBtn}>
        <Button onPress={() => this.props.navigation.navigate('Modal', {user})} title={button} color='white' />
      </TouchableHighlight>
    const connections = (user.id === this.props.user.id) ? this.displayConnections(user) : null



    return (
      <ScrollView style={ styles.scrollContainer }>
        <View style={ styles.container }>
          <View style={ styles.imageContainer }>
            <Image style={ styles.profilePicture } source={ require('./profile-pic.jpeg') } />
            {
              editProfileSection
            }
          </View>
          <View style={styles.profileContainer}>
            <View style={ styles.about }>
              <Text style={ styles.name }>{ user.name }</Text>
              <Text style={ styles.position }>{ user.position.job_title }</Text>
              <Text style={ styles.company }>{ user.employer.name }</Text>
              <View style={ styles.iconContainer }>
                <Icon name='map-pin' size={20} color='#4AA9C5' style={{marginRight: 7}} />
                <Text style={ styles.location }>{ user.location.city }</Text>
              </View>
              <View style={ styles.iconContainer }> 
                <Icon name='linkedin' size={ 20 } color='#4AA9C5' style={ {marginRight: 5} }/>
                <Text style={{marginTop: 6}}>{ user.linkedin }</Text>
              </View>
              <View style={ styles.iconContainer }>
                <Icon name='github' size={ 20 } color='#4AA9C5' style={ {marginRight: 5} }/>
                <Text style={{marginTop: 6}}>{ user.github }</Text>
              </View>
              <Text style={ styles.bio }>{ user.bio }</Text>
              { connectBtn }
            </View>
            { connectionInfo }
            {
              user.connections &&
              <View>
                <Text style={ styles.connections}>Connections</Text>
                <View style={ styles.connectionsContainer }>
                  { connections }
                </View>
              </View>
            }
          </View>
        </View>
      </ScrollView>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(ProfilePage)

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#4AA9C5',
  },
  container: {
    flex: 1,
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
    height: 180,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 200,
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
    zIndex: 200,
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginRight: 20,
    marginLeft: 20,
    marginTop: -100,
    paddingBottom: 20,
    height: '100%'
  },
  editIcon: {
    position: 'absolute',
    right: 30,
    top: 110,
    zIndex: 100000000005
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
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  location: {
    fontSize: 19,
    fontWeight: '200',
    color: 'gray'
  },
  bio: {
    textAlign: 'center',
    fontWeight: '300',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10
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
  noConnections: {
    color: '#fff',
    fontSize: 16
  },
  connections: {
    marginLeft: 20,
    marginTop: 15,
    fontSize: 15,
  },
  connectionsContainer: {
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