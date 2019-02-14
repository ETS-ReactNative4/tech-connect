import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Input containerStyle={styles.profileInputContainer} inputContainerStyle={styles.profileInput} placeholder="Name" leftIcon={styles.leftIcon} leftIcon={{type: 'font-awesome', name: 'chevron-left'}}/>
        <Input containerStyle={styles.profileInputContainer} inputContainerStyle={styles.profileInput} placeholder="Phone Number"/>
        <Input containerStyle={styles.profileInputContainer} inputContainerStyle={styles.profileInput} placeholder="Location"/>
        <Input containerStyle={styles.profileInputContainer} inputContainerStyle={styles.profileInput} placeholder="Position"/>
        <Input containerStyle={styles.profileInputContainer} inputContainerStyle={styles.profileInput} placeholder="Company"/>
        <Input containerStyle={styles.profileInputContainer} inputContainerStyle={styles.profileInput} placeholder="GitHub"/>
        <Input containerStyle={styles.profileInputContainer} inputContainerStyle={styles.profileInput} placeholder="LinkedIn"/>
        <Input containerStyle={styles.profileInputContainer} inputContainerStyle={styles.profileInput} placeholder="Bio"/>
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
  leftIcon: {
    color: 'blue'
  }

})