import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <TextInput style={styles.profileInput} placeholder="Name"/>
        <TextInput style={styles.profileInput} placeholder="Phone Number"/>
        <TextInput style={styles.profileInput} placeholder="Location"/>
        <TextInput style={styles.profileInput} placeholder="Position"/>
        <TextInput style={styles.profileInput} placeholder="Company"/>
        <TextInput style={styles.profileInput} placeholder="GitHub"/>
        <TextInput style={styles.profileInput} placeholder="LinkedIn"/>
        <TextInput style={styles.profileInput} placeholder="Bio"/>
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
  profileInput: {
    width: 300,
    height: 50,
    borderBottomWidth: 1.3,
    borderBottomColor: '#4AA9C5',
    marginBottom: 10
  }
})