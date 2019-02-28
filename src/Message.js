import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';


export class Message extends Component {
  constructor() {
    super()
    this.state = {
      showMessage: false
    }
  }

  render() {
    const { message, user } = this.props
    const connection = (user.name === message.receiver.name) ? message.sender.name :  message.receiver.name
    const sentDate = new Date(message.created_at).toUTCString().split(' ').slice(0, 4).join(' ')
    const meetingDate = new Date(message.meeting_date).toUTCString().split(' ').slice(0, 4).join(' ')
    const time = new Date(message.meeting_date).toUTCString().split(' ')[4]
    let messageText
    let messagePhoto
    let messageEnd = (message.meeting_location !== 'N/A') ? `at ${message.meeting_location} on ${meetingDate} at ${time}` : null

    if (message.receiver.name === user.name) {
      messageText = <Text style={ styles.messageBody } >You have { message.status } a meeting with { message.sender.name } { messageEnd }</Text>
      messagePhoto = message.sender.photo
    } else {
      messageText = <Text style={ styles.messageBody } >{ message.receiver.name } has { message.status } a meeting with you { messageEnd }</Text>
      messagePhoto = message.receiver.photo
    }
    return (
      <View style={ styles.messageContainer }>
        <Text style={ styles.date }>{ sentDate }</Text>
        <TouchableOpacity style={ styles.messageInfoContainer } onPress={() => this.setState({showMessage: !this.state.showMessage})}>
          <View style={ styles.imageContainer }>
            <Image source={ {uri: messagePhoto} } style={ styles.userPic }/>
          </View>
          <View style={ styles.messageInfo }>
            <Text style={ styles.name }>{ connection }</Text>
            <Text style={ styles.message }>{ message.status }</Text>
            {
              !this.state.showMessage ? null : messageText
            }
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(Message)


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