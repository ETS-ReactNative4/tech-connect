import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Input } from 'react-native-elements';
import { updateUser } from './thunks/updateUser'
import { connect } from 'react-redux'
import ModalSelector from 'react-native-modal-selector'
import { getLocations, getPositions, getEmployers } from './apiCalls'



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
      position: 'Employee',
      locations: [],
      employers: [],
      position: []
    }
  }

  async componentDidMount() {
    const locations = await getLocations()
    const positions = await getPositions()
    const employers = await getEmployers()
    this.setState({ locations, employers, positions })
  }


  handleSave = () => {
    this.props.updateUser({...this.state, api_key: this.props.user.api_key})
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container} >
      <Text style={styles.title}>Update Profile</Text>
        <Input
          onChangeText={(text) => this.setState({name: text})} 
          containerStyle={styles.profileInputContainer} 
          leftIconContainerStyle={styles.icon} 
          inputContainerStyle={styles.profileInput} 
          placeholder="Name"
          value={this.state.name}
          leftIcon={
            <Icon
              name='user'
              size={18}
              color='#4AA9C5'
            />
          }
        />
        <Input 
          onChangeText={(text) => this.setState({phone_number: text})} 
          containerStyle={styles.profileInputContainer} 
          leftIconContainerStyle={styles.icon} 
          inputContainerStyle={styles.profileInput} 
          placeholder="Phone Number"
          value={this.state.phone_number}
          leftIcon={
            <Icon 
              name='phone'
              size={18}
              color='#4AA9C5'
            />
          }
        />
        
        <ModalSelector
          optionTextStyle={{color: '#4AA9C5', fontSize: 20}}
          data={this.state.locations}
          initValue="Select something!"
          cancelButtonAccessibilityLabel={'Cancel Button'}
          onChange={(option)=>{ this.setState({location: option.label})}}>
          <Input
            containerStyle={styles.profileInputContainer} 
            leftIconContainerStyle={styles.icon} 
            inputContainerStyle={styles.profileInput} 
            leftIcon={
              <Icon
                name='map-pin'
                size={18}
                color='#4AA9C5'
              />
            }
          editable={false}
          placeholder="Location"
          value={this.state.location} />
        </ModalSelector>

        <ModalSelector
          optionTextStyle={{color: '#4AA9C5', fontSize: 20}}
          data={this.state.positions}
          initValue="Select something!"
          cancelButtonAccessibilityLabel={'Cancel Button'}
          onChange={(option)=>{ this.setState({position: option.label})}}>
          <Input
            containerStyle={styles.profileInputContainer} 
            leftIconContainerStyle={styles.icon} 
            inputContainerStyle={styles.profileInput} 
            leftIcon={
              <Icon
                name='briefcase'
                size={18}
                color='#4AA9C5'
              />
            }
          editable={false}
          placeholder="Position"
          value={this.state.position} />
        </ModalSelector>

        <ModalSelector
          optionTextStyle={{color: '#4AA9C5', fontSize: 20}}
          data={this.state.employers}
          initValue="Select something!"
          cancelButtonAccessibilityLabel={'Cancel Button'}
          onChange={(option)=>{ this.setState({employer: option.label})}}>
          <Input
            containerStyle={styles.profileInputContainer} 
            leftIconContainerStyle={styles.icon} 
            inputContainerStyle={styles.profileInput} 
            leftIcon={
              <Icon
                name='home'
                size={18}
                color='#4AA9C5'
              />
            }
          editable={false}
          placeholder="Employer"
          value={this.state.employer} />
        </ModalSelector>

        <Input 
          onChangeText={(text) => this.setState({github: text})} 
          containerStyle={styles.profileInputContainer} 
          leftIconContainerStyle={styles.icon} 
          inputContainerStyle={styles.profileInput} 
          placeholder="GitHub"
          value={this.state.github}
          leftIcon={
            <Icon
              name='github'
              size={18}
              color='#4AA9C5'
            />
          }
        />
        <Input 
          onChangeText={(text) => this.setState({linkedin: text})} 
          containerStyle={styles.profileInputContainer} 
          leftIconContainerStyle={styles.icon} 
          inputContainerStyle={styles.profileInput} 
          placeholder="LinkedIn"
          value={this.state.linkedin}
          leftIcon={
            <Icon
              name='linkedin'
              size={18}
              color='#4AA9C5'
            />
          }
        />
        <Input 
          onChangeText={(text) => this.setState({bio: text})} 
          containerStyle={styles.profileInputContainer} 
          leftIconContainerStyle={styles.icon} 
          inputContainerStyle={styles.profileInput} 
          placeholder="Bio"
          value={this.state.bio}
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
    position: 'absolute',
    bottom: 20
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    color: '#4AA9C5'
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