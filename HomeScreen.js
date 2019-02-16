import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import { SuggestedConnection } from './SuggestedConnection.js' 

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.name}>Joe Jonas</Text>
        <Text style={styles.position}>Singer</Text>
        <View>
          <Image source={require('./profile-pic.jpeg')} style={styles.profilePic} />
          <View style={styles.circle}/>
        </View>
        <View styles={styles.suggestedConnections}>
          <Text>Suggested Connections</Text>
          {/* Render suggested connections here */}
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
    flex: 1,
    alignItems: 'flex-start',
  },
  circle: {
    position: 'absolute',
    top: -480,
    left: -93,
    height: 600,
    width: 600,
    borderRadius: 300,
    backgroundColor: '#4AA9C5',
    shadowOffset: {  width: 0,  height: 2,  },
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: .5,
  },
  profilePic: {
    height: 180,
    width: 180,
    borderRadius: 90,
    position: 'absolute',
    zIndex: 20000,
    top: 20,
    left: 117
  },
  name: {
    marginTop: 50,
    marginLeft: 25,
    position: 'relative',
    zIndex: 20000,
    color: 'white',
    fontSize: 30
  },
  position: {
    marginTop: 5,
    marginLeft: 25,
    position: 'relative',
    zIndex: 20000,
    color: 'white',
    fontSize: 20,

  }
})