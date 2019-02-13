import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';



export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      register: false,
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  toggleRegister = () => {
    this.setState({
      register: !this.state.register
    })
  }

  render() {
    const btnText = this.state.register ? 'REGISTER' : 'SIGN IN'
    const toggleText = this.state.register ? 'Sign In' : 'Register'

    return (
      <View style={styles.container}>
        <Text>Tech Connect</Text>
        <TextInput placeholder="Email" style={styles.input} name='email' onChangeText={(text) => this.setState({email: text})} />
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} name='password' onChangeText={(text) => this.setState({password: text})} /> 
        {
          this.state.register && <TextInput placeholder="Confirm Password" secureTextEntry={true} style={styles.input} onChangeText={(text) => this.setState({confirmPassword: text})}/> 
        }
        <TouchableHighlight style={styles.button}>
          <Button title={btnText} color='#E8FDFF'/>
        </TouchableHighlight>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={this.toggleRegister} >
            <Text style={[styles.text, {textDecorationLine: 'underline'}]}>{toggleText}</Text>
          </TouchableOpacity>
          <Text style={styles.text} > if you do not have an account</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4AA9C5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#E8FDFF',
  },
  input: {
    backgroundColor: '#E8FDFF',
    borderRadius: 20,
    padding: 10,
    height: 45,
    width: 300,
    margin: 10
  },
  button: {
    backgroundColor: '#8FC9DB',
    borderRadius: 25,
    height: 40,
    width: 140
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
});