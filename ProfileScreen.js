import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Input } from 'react-native-elements';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Input containerStyle={styles.profileInputContainer} leftIconContainerStyle={styles.icon} inputContainerStyle={styles.profileInput} placeholder="Name" 
          leftIcon={
            <Icon
              name='user'
              size={18}
              color='#4AA9C5'
            />
          }
        />
        <Input containerStyle={styles.profileInputContainer} leftIconContainerStyle={styles.icon} inputContainerStyle={styles.profileInput} placeholder="Phone Number"
        leftIcon={
            <Icon
              name='phone'
              size={18}
              color='#4AA9C5'
            />
          }
          />
        <Input containerStyle={styles.profileInputContainer} leftIconContainerStyle={styles.icon} inputContainerStyle={styles.profileInput} placeholder="Location"
          leftIcon={
            <Icon
              name='map-pin'
              size={18}
              color='#4AA9C5'
            />
          }
        />
        <Input containerStyle={styles.profileInputContainer} leftIconContainerStyle={styles.icon} inputContainerStyle={styles.profileInput} placeholder="Position"
          leftIcon={
            <Icon
              name='briefcase'
              size={18}
              color='#4AA9C5'
            />
          }
        />
        <Input containerStyle={styles.profileInputContainer} leftIconContainerStyle={styles.icon} inputContainerStyle={styles.profileInput} placeholder="Company"
          leftIcon={
            <Icon
              name='home'
              size={18}
              color='#4AA9C5'
            />
          }
        />
        <Input containerStyle={styles.profileInputContainer} leftIconContainerStyle={styles.icon} inputContainerStyle={styles.profileInput} placeholder="GitHub"
          leftIcon={
            <Icon
              name='github'
              size={18}
              color='#4AA9C5'
            />
          }
        />
        <Input containerStyle={styles.profileInputContainer} leftIconContainerStyle={styles.icon} inputContainerStyle={styles.profileInput} placeholder="LinkedIn"
          leftIcon={
            <Icon
              name='linkedin'
              size={18}
              color='#4AA9C5'
            />
          }
        />
        <Input containerStyle={styles.profileInputContainer} leftIconContainerStyle={styles.icon} inputContainerStyle={styles.profileInput} placeholder="Bio"
          leftIcon={
            <Icon
              name='edit'
              size={18}
              color='#4AA9C5'
            />
          }
        />
      </View>  
    )
  }
}



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
  }

})