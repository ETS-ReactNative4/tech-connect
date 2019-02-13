import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';



export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tech Connect</Text>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
        <TouchableHighlight style={styles.button}>
          <Button title="Sign In" color='#E8FDFF' />
        </TouchableHighlight>
        <Text style={styles.text}>Register if you do not have an account</Text>
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
    color: '#E8FDFF'
    
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
  }
});

