import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Message from './Message'

export default class MessagesScreen extends Component {
  render() {
    return (
      <View style={ styles.inboxContainer }>
        <Text style={ styles.inboxTitle }>Inbox</Text>
        <View style={ styles.messageContainer }>
          <Message />
          <Message />
          <Message />
          <Message />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inboxContainer: {
    flex: 1,
    backgroundColor: '#4AA9C5',
    padding: 20
  },
  inboxTitle: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10
  },
  messageContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  }
})
