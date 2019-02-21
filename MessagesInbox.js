import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Message from './Message'
import { getMessages } from './apiCalls'
import { connect } from 'react-redux';
const uuidv1 = require('uuid/v1');

export class MessagesInbox extends Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  async componentDidMount() {
    const messages = await getMessages(this.props.api_key)
    this.setState({
      messages
    })
  }

  render() {
    return (
      <View style={ styles.inboxContainer }>
        <View style={ styles.messageContainer }>
        <Text style={ styles.inboxTitle }>Inbox</Text>
        {
          this.state.messages.length ? this.state.messages.map(message => <Message message={message.attributes} key={ uuidv1() } />) : null
        }
        </View>
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  api_key: state.user.api_key
})

export default connect(mapStateToProps)(MessagesInbox)

const styles = StyleSheet.create({
  inboxContainer: {
    flex: 1,
    backgroundColor: '#4AA9C5',
    padding: 20,
    paddingTop: 40
  },
  inboxTitle: {
    fontSize: 30,
    marginTop: 5,
    marginBottom: 10,
    color: '#4AA9C5',
    marginLeft: 10
  },
  messageContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  }
})
