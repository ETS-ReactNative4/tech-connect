import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Input } from 'react-native-elements';
import { updateUser } from './thunks/updateUser'
import { connect } from 'react-redux'


export class ProfileScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      bio: '',
      linkedin: '',
      github: '',
      phone_number: '',
      location: 'Denver,CO',
      employer: 'Turing',
      position: 'Employee'
    }
  }

  handleSave = () => {
    this.props.updateUser({...this.state, api_key: this.props.user.api_key})
    this.props.navigation.navigate('Home')
  }

  render() {
    return (

      <View style={styles.container} >
        <Input
          onChangeText={(text) => this.setState({name: text})} 
          containerStyle={styles.profileInputContainer} 
          leftIconContainerStyle={styles.icon} 
          inputContainerStyle={styles.profileInput} 
          placeholder="Name" 
          leftIcon={
            <Icon
              name='user'
              size={18}
              color='#4AA9C5'
            />
          }
        />
        <Input 
          containerStyle={styles.profileInputContainer} 
          leftIconContainerStyle={styles.icon} 
          inputContainerStyle={styles.profileInput} 
          placeholder="Phone Number"
          leftIcon={
            <Icon
              name='phone'
              size={18}
              color='#4AA9C5'
            />
          }
          />
        <Input 
          containerStyle={styles.profileInputContainer} 
          leftIconContainerStyle={styles.icon} 
          inputContainerStyle={styles.profileInput} 
          placeholder="Location"
          leftIcon={
            <Icon
              name='map-pin'
              size={18}
              color='#4AA9C5'
            />
          }
        />
        <Input 
          containerStyle={styles.profileInputContainer} 
          leftIconContainerStyle={styles.icon} 
          inputContainerStyle={styles.profileInput} 
          placeholder="Position"
          leftIcon={
            <Icon
              name='briefcase'
              size={18}
              color='#4AA9C5'
            />
          }
        />
        <Input 
          containerStyle={styles.profileInputContainer} 
          leftIconContainerStyle={styles.icon} 
          inputContainerStyle={styles.profileInput} 
          placeholder="Company"
          leftIcon={
            <Icon
              name='home'
              size={18}
              color='#4AA9C5'
            />
          }
        />
        <Input 
          containerStyle={styles.profileInputContainer} 
          leftIconContainerStyle={styles.icon} 
          inputContainerStyle={styles.profileInput} 
          placeholder="GitHub"
          leftIcon={
            <Icon
              name='github'
              size={18}
              color='#4AA9C5'
            />
          }
        />
        <Input 
          containerStyle={styles.profileInputContainer} 
          leftIconContainerStyle={styles.icon} 
          inputContainerStyle={styles.profileInput} 
          placeholder="LinkedIn"
          leftIcon={
            <Icon
              name='linkedin'
              size={18}
              color='#4AA9C5'
            />
          }
        />
        <Input 
          containerStyle={styles.profileInputContainer} 
          leftIconContainerStyle={styles.icon} 
          inputContainerStyle={styles.profileInput} 
          placeholder="Bio"
          leftIcon={
            <Icon
              name='edit'
              size={18}
              color='#4AA9C5'
            />
          }
        />
        <TouchableHighlight style={styles.button}>
          <Button title="save" color='#E8FDFF' onPress={this.handleSave}/>
        </TouchableHighlight>
      </View>  
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
  isLoading: state.isLoading,
  error: state.error
})

export const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(updateUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInputContainer: {
    width: 300,
    height: 50,
    marginBottom: 10,
  },
  profileInput: {
    borderBottomWidth: 1.3,
    borderBottomColor: '#4AA9C5',
  },
  icon: {
    marginRight: 10,
    marginLeft: 0
  },
  button: {
    backgroundColor: '#8FC9DB',
    borderRadius: 25,
    height: 40,
    width: 140
  }
})