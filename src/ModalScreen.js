import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import { connect } from 'react-redux'
import { sendConnectionRequest } from '../apiCalls'
import Icon from 'react-native-vector-icons/Feather'


export class ModalScreen extends Component {
  constructor() {
    super()
    this.state = {
      response: '',
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

  sendRequest = async () => {
    const user = this.props.navigation.getParam('user')
    const response = await sendConnectionRequest(this.props.user.api_key, user.id, this.state.inputs)
    this.setState({ response })
  }

  render() {
    const { response, inputs } = this.state
    const { datetime_1, datetime_2, datetime_3, meeting_1, meeting_2, meeting_3 } = this.state.inputs
    const user = this.props.navigation.getParam('user')
    const note = `${user.name} will receive an email with your suggestions. Once confirmed you will receive a notification email.`
    const error = response.length ? <Text style={{color: 'red'}}>{response}</Text> : null
    if (response === 'Email Sent') {
      return (
        <View style={styles.container}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.title}>{ response }</Text>
            <Icon
              name='check-circle'
              size={35}
              color='#fff'
              style={{marginLeft: 5}}
            />
          </View>
          <TouchableHighlight style={styles.btnContainer}>
            <Button
              onPress={() => this.props.navigation.goBack()}
              color={'#fff'}
              title="Done"
            />
          </TouchableHighlight>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Request a Meeting</Text>
          <Text style={styles.note}>{ note }</Text>
          <Text style={styles.suggest}>Suggest Three Date/Times:</Text>
          <DatePicker
            style={styles.date}
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
                marginLeft: 36,
                borderWidth: 0
              }
            }}
            onDateChange={date => this.setState({inputs: {...this.state.inputs, datetime_1: date}})}
          />
          <DatePicker
            style={styles.date}
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
                marginLeft: 36,
                borderWidth: 0
              }
            }}
            onDateChange={date => this.setState({inputs: {...this.state.inputs, datetime_2: date}})}
          />
          <DatePicker
            style={styles.date}
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
                marginLeft: 36,
                borderWidth: 0
              }
            }}
            onDateChange={date => this.setState({inputs: {...this.state.inputs, datetime_3: date}})}
          />
          <Text style={styles.suggest}>Suggest Three Locations:</Text>
          <Input 
            onChangeText={text => this.setState({inputs: {...this.state.inputs, meeting_1: text}})}
            containerStyle={styles.input} 
            inputContainerStyle={styles.inputContainer} 
          />
          <Input 
            onChangeText={text => this.setState({inputs: {...this.state.inputs, meeting_2: text}})} 
            containerStyle={styles.input} 
            inputContainerStyle={styles.inputContainer} 
          />
          <Input 
            onChangeText={text => this.setState({inputs: {...this.state.inputs, meeting_3: text}})}
            containerStyle={styles.input} 
            inputContainerStyle={styles.inputContainer} 
          />
          { error }
          <TouchableHighlight style={styles.btnContainer}>
            <Button 
              onPress={this.sendRequest}
              title="Send Request"
              color={'#fff'}
            />
          </TouchableHighlight>
          <TouchableHighlight style={styles.btnContainer}>
            <Button
              onPress={() => this.props.navigation.goBack()}
              color={'#fff'}
              title="Cancel"
            />
          </TouchableHighlight>
        </View>
      )
    }
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
    marginBottom: 25,
    fontSize: 14,
    color: '#fff',
    textAlign: 'center'
  },
  suggest: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 20,
    color: '#fff',
    alignSelf: 'flex-start'
  },
  date: {
    width: '95%', 
    backgroundColor: '#fff', 
    borderRadius: 5, 
    marginTop: 5, 
    marginBottom: 5, 
    borderBottomWidth: 0
  },
  input: {
    width: '95%',
    borderRadius: 5, 
    backgroundColor: '#fff', 
    marginTop: 5,
    marginBottom: 5,
  },
  inputContainer: {
    borderBottomWidth: 0
  }, 
  btnContainer: {
    backgroundColor: '#93548F',
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 20,
    shadowOffset: {  width: 0,  height: 2 },
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: .5,
    marginTop: 10,
    width: 200
  }
})

