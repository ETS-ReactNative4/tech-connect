import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'

export default class Message extends Component {
  constructor() {
    super()
    this.state = {
      showMessage: false
    }
  }

  render() {
    const sentDate = new Date(this.props.message.created_at).toUTCString().split(' ').slice(0, 4).join(' ')
    const meetingDate = new Date(this.props.message.meeting_date).toUTCString().split(' ').slice(0, 4).join(' ')
    const time = new Date(this.props.message.meeting_date).toUTCString().split(' ')[4]
    
    return (
      <View style={ styles.messageContainer }>
        <Text style={ styles.date }>{ sentDate }</Text>
        <TouchableOpacity style={ styles.messageInfoContainer } onPress={() => this.setState({showMessage: !this.state.showMessage})}>
          <View style={ styles.imageContainer }>
            <Image source={ require('./profile-pic.jpeg') } style={ styles.userPic }/>
          </View>
          <View style={ styles.messageInfo }>
            <Text style={ styles.name }>{ this.props.message.receiver }</Text>
            <Text style={ styles.message }>{ this.props.message.status }</Text>
            {
              !this.state.showMessage ? null : <Text style={ styles.messageBody } >{ this.props.message.receiver } has confirmed a meeting with you at { this.props.message.meeting_location } on { meetingDate } at { time }</Text>
            }
          </View>
        </TouchableOpacity>
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
  messageInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
    marginRight: 10
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
    marginTop: 5,
    color: 'gray',
  },
  messageBody: {
    marginRight: 10
  },
  messageInfo: {
    marginLeft: 10,
    marginRight: 30,
    marginTop: 5
  }
})