import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';


export default class HomeScreen extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>Name</Text>
        <Text>Position</Text>
        <View>
          
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})