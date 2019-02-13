import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <TextInput placeholder="Name"/>
        <TextInput placeholder="Phone Number"/>
        <TextInput placeholder="Location"/>
        <TextInput placeholder="Position"/>
        <TextInput placeholder="Company"/>
        <TextInput placeholder="GitHub"/>
        <TextInput placeholder="LinkedIn"/>
        <TextInput placeholder="Bio"/>
      </View>  
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4AA9C5',
    alignItems: 'center',
    justifyContent: 'center',
  },
})