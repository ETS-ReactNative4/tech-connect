import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.name}>Joe Jonas</Text>
        <Text style={styles.position}>Singer</Text>
        <Image source={require('./profile-pic.jpeg')} style={styles.profilePic} />
        <View style={styles.circle}/>
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
    top: -320,
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
    top: 180,
    left: 117
  },
  name: {
    marginTop: 50,
    position: 'relative',
    zIndex: 20000
  },
  position: {
    marginTop: 5,
    position: 'relative',
    zIndex: 20000
  }
})