import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { createUser } from './thunks/createUser'
import { loginUser } from './thunks/loginUser'



export class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      register: false,
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

  toggleRegister = () => {
    this.setState({
      register: !this.state.register
    })
  }

  handleSubmit = async () => {
    const { email, password, password_confirmation } = this.state
    const createInfo = { email, password, password_confirmation }
    const loginInfo = { email, password }

    if (this.state.register) {
      await this.props.createUser(createInfo)
      this.handleUpdateProfile()
    } else {
      await this.props.loginUser(loginInfo)
      this.handleUpdateProfile()
    }
  }

  handleUpdateProfile = () => {
    if (this.props.error === '' && this.state.register) {
      this.props.navigation.navigate('Profile')
    } else if (this.props.error === '') {
      this.props.navigation.navigate('Home')
    }
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
          this.state.register && <TextInput placeholder="Confirm Password" secureTextEntry={true} style={styles.input} onChangeText={(text) => this.setState({password_confirmation: text})}/> 
        }
        <TouchableHighlight style={styles.button}>
          <Button title={btnText} color='#E8FDFF' onPress={this.handleSubmit}/>
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


export const mapStateToProps = (state) => ({
  user: state.user,
  isLoading: state.isLoading,
  error: state.error
})

export const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => dispatch(createUser(user)),
  loginUser: (user) => dispatch(loginUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)


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