import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Message from './Message'
import { getMessages } from './apiCalls'
import { connect } from 'react-redux';

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

  displayMessages = async () => {
    const messages = this.state.messages.map(message => {
      console.log(message)
      return <Message message={message.attributes} />
    })
    return messages
  }

  render() {
    return (
      <View style={ styles.inboxContainer }>
        <Text style={ styles.inboxTitle }>Inbox</Text>
        <View style={ styles.messageContainer }>
        {
          this.state.messages.length ? this.state.messages.map(message => <Message message={message.attributes} />) : null
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
