import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { LinearGradient } from 'expo'
import { Input } from 'react-native-elements';
import { createUser } from './thunks/createUser'
import { loginUser } from './thunks/loginUser'
import Icon from 'react-native-vector-icons/EvilIcons';


export class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      register: false,
      email: '',
      password: '',
      password_confirmation: '',
      error: false
    }
  }

  toggleRegister = () => {
    this.setState({
      register: !this.state.register,
      error: false
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

    if(this.props.error) {
      this.setState({ error: true })
    }
  }
  

  handleUpdateProfile = () => {
    if (this.props.error === '' && this.state.register) {
      this.props.navigation.navigate('EditProfile')
    } else if (this.props.error === '') {
      this.props.navigation.navigate('Home')
    }
  }

  render() {
    const btnText = this.state.register ? 'REGISTER' : 'SIGN IN'
    const toggleText = this.state.register ? 'Sign In' : 'Register'
    const errorMessage = this.state.error ? this.props.error : null

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Tech</Text>
        <Text style={[styles.header, {marginBottom: 50}]}>Connect</Text>
        <Input
          leftIcon= {
            <LinearGradient
                colors={['#4AA9C5', '#6364c1', '#93548F']}
                start={0.4}
                style={styles.gradient} >
              <Icon
                raised={true}
                name='envelope'
                size={28}
                color='#FFF'
              />
            </LinearGradient>
            }
          leftIconContainerStyle={styles.icon} 
          inputContainerStyle={styles.inputContainer} 
          containerStyle={styles.input} 
          placeholder="Email" style={styles.input} 
          name='email' 
          onChangeText={(text) => this.setState({email: text})} 
        />
        <Input 
          leftIcon= {
            <LinearGradient
              colors={['#4AA9C5', '#6364c1', '#93548F']}
              start={0.4}
              style={styles.gradient} 
            >
              <Icon
                raised={true}
                name='lock'
                size={32}
                color='#FFF'
              />
            </LinearGradient>
          }
          leftIconContainerStyle={styles.icon} 
          inputContainerStyle={styles.inputContainer} 
          containerStyle={styles.input} 
          secureTextEntry={true} 
          name='password' 
          placeholder="Password" 
          onChangeText={(text) => this.setState({password: text})} 
        /> 
        {
          this.state.register && 
            <Input 
              leftIcon= {
                <LinearGradient
                  colors={['#4AA9C5', '#6364c1', '#93548F']}
                  start={0.4}
                  style={styles.gradient} >
                  <Icon
                    raised={true}
                    name='lock'
                    size={32}
                    color='#FFF'
                  />
                </LinearGradient>
              }
              leftIconContainerStyle={styles.icon} 
              inputContainerStyle={styles.inputContainer} 
              containerStyle={styles.input} 
              secureTextEntry={true} 
              placeholder="Confirm Password" 
              onChangeText={(text) => this.setState({password_confirmation: text})}
            /> 
        }
        <Text style={styles.error}>{ errorMessage }</Text>
        <TouchableHighlight style={styles.button}>
          <Button title={btnText} color='#E8FDFF' onPress={this.handleSubmit}/>
        </TouchableHighlight>
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={this.toggleRegister} >
            <Text style={[styles.text, {textDecorationLine: 'underline', fontWeight: 'bold'}]}>{toggleText}</Text>
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
  header: {
    height: 75,
    alignItems: 'center',
    color: '#fff',
    marginTop: 0,
    marginBottom: 0,
    fontSize: 90,
    fontFamily: 'American Typewriter',
    lineHeight: 90,
  },
  gradient: {
    borderRadius: 300, 
    width: 48, 
    height: 48, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
    color: '#E8FDFF',
  },
  icon: {
    marginRight: 10,
    marginLeft: -5,
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  error: {
    color: 'red',
    marginBottom: 3
  },
  inputContainer: {
    borderBottomWidth: 0,
    height: 40
  },
  input: {
    backgroundColor: '#E8FDFF',
    borderRadius: 30,
    padding: 10,
    width: 300,
    margin: 10
  },
  button: {
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#8FC9DB',
    borderRadius: 25,
    height: 44,
    width: 140,
    shadowOffset: {  width: 2,  height: 2},
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: .2
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8
  }
});