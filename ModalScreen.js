import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import { connect } from 'react-redux'
import { sendConnectionRequest } from './apiCalls'


export class ModalScreen extends Component {
  constructor() {
    super()
    this.state = {
      requestSent: false,
      inputs: {
        datetime_1: '', 
        datetime_2: '', 
        datetime_3: '',
        meeting_1: '',
        meeting_2: '',
        meeting_3: ''   
      }
    }
  }

  sendRequest = () => {
    const user = this.props.navigation.getParam('user')
    this.setState({ requestSent: true })
    sendConnectionRequest(this.props.user.api_key, user.id, this.state.inputs)
  }

  render() {
    const { datetime_1, datetime_2, datetime_3, meeting_1, meeting_2, meeting_3 } = this.state.inputs
    const name = this.props.navigation.getParam('user')
    const note = `${name} will receive an email with your suggestions. Once confirmed you will receive a notification email.`

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Request a Meeting</Text>
        <Text style={styles.note}>{ note }</Text>
        <DatePicker
          style={{width: 200}}
          date={datetime_1}
          mode='datetime'
          format='YYYY-MM-DD HH:MM:SS'
          minDate={new Date()}
          maxDate='2020-01-01'
          confirmBtnText='Confirm'
          cancelBtnText='Cancel'
          customStyles={{
           dateIcon: {
             position: 'absolute',
             left: 0,
             top: 4,
             marginLeft: 0
           },
           dateInput: {
             marginLeft: 36
           }
         }}
         onDateChange={(date) => {this.setState({inputs: {...this.state.inputs, datetime_1: date}})}}
       />
       <DatePicker
          style={{width: 200}}
          date={datetime_2}
          mode='datetime'
          format='YYYY-MM-DD HH:MM:SS'
          minDate={new Date()}
          maxDate='2020-01-01'
          confirmBtnText='Confirm'
          cancelBtnText='Cancel'
          customStyles={{
           dateIcon: {
             position: 'absolute',
             left: 0,
             top: 4,
             marginLeft: 0
           },
           dateInput: {
             marginLeft: 36
           }
         }}
         onDateChange={(date) => {this.setState({inputs: {...this.state.inputs,datetime_2: date}})}}
       />
       <DatePicker
          style={{width: 200}}
          date={datetime_3}
          mode='datetime'
          format='YYYY-MM-DD HH:MM:SS'
          minDate={new Date()}
          maxDate='2020-01-01'
          confirmBtnText='Confirm'
          cancelBtnText='Cancel'
          customStyles={{
           dateIcon: {
             position: 'absolute',
             left: 0,
             top: 4,
             marginLeft: 0
           },
           dateInput: {
             marginLeft: 36
           }
         }}
         onDateChange={(date) => {this.setState({inputs: {...this.state.inputs,datetime_3: date}})}}
       />
       <Input onChangeText={text => this.setState({inputs: {...this.state.inputs, meeting_1: text}})} />
       <Input onChangeText={text => this.setState({inputs: {...this.state.inputs, meeting_2: text}})} />
       <Input onChangeText={text => this.setState({inputs: {...this.state.inputs, meeting_3: text}})} />
        <Button 
          onPress={this.sendRequest}
          title="Send Request"
        />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Cancel"
        />
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(ModalScreen)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4AA9C5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
  },
  note: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center'
  }
})

