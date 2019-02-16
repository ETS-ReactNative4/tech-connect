import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import SuggestedConnection from './SuggestedConnection.js' 

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.name}>Joe Jonas</Text>
        <Text style={styles.position}>Singer</Text>
        <View style={styles.imageContainer}>
          <Image source={require('./profile-pic.jpeg')} style={styles.profilePic} />
        </View>
        <View style={styles.circle}/>
        <View styles={styles.suggestedConnections}>
          <Text style={styles.suggestedTitle}>Suggested Connections</Text>
          <SuggestedConnection />
          <SuggestedConnection />
          <SuggestedConnection />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(HomeScreen)


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    padding: 20,
    height: '100%',
    width: '100%'
  },
  circle: {
    position: 'absolute',
    top: -380,
    left: -93,
    height: 600,
    width: 600,
    borderRadius: 300,
    backgroundColor: '#4AA9C5',
    shadowOffset: {  width: 0,  height: 2  },
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: .5,
  },
  imageContainer: {
    display: 'flex',
    height: 180,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 200000,
    marginBottom: 20,
  },
  profilePic: {
    height: 180,
    width: 180,
    borderRadius: 90,
    zIndex: 20000,
  },
  name: {
    marginTop: 20,
    position: 'relative',
    zIndex: 20000,
    color: 'white',
    fontSize: 30
  },
  position: {
    marginTop: 5,
    position: 'relative',
    zIndex: 20000,
    color: 'white',
    fontSize: 20,
  },
  suggestedTitle: {
    color: '#4AA9C5',
    fontSize: 20,
    marginBottom: 10
  },
  suggestedConnections: {
    display: 'flex',
    alignItems: 'stretch',
    shadowOffset: {  width: 0,  height: 2 },
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: .5,
  }
})