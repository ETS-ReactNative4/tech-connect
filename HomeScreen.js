import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo'
import { getUserInfo } from './apiCalls'
import SuggestedConnection from './SuggestedConnection.js' 
const uuidv1 = require('uuid/v1');

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  viewProfile = async (id) => {
    const user = await getUserInfo(id, this.props.user.api_key)
    this.props.navigation.navigate('ProfilePage', {user})
  }


  render() {
    const suggestions = this.props.user.suggestions
    const title = this.props.user.position ? this.props.user.position.job_title : null

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.name}>{this.props.user.name}</Text>
          <Text style={styles.position}>{title}</Text>
          <View style={styles.imageContainer}>
            <Image source={ {uri: this.props.user.photo} }style={styles.profilePic} />
          </View>
          <View style={styles.gradientContainer}>
            <LinearGradient
              colors={['#4AA9C5', '#6383C1', '#93548F']}
              start={[ 0.4, 0.7 ]}
              style={[styles.circle, { borderRadius: 300 }]} />
          </View>
          <View styles={styles.suggestedConnections}>
            <Text style={styles.suggestedTitle}>Suggested Connections</Text>
            { 
              suggestions.map(suggestion => <SuggestedConnection suggestion={ suggestion } viewProfile={ this.viewProfile } key={ uuidv1() } />) 
            }
          </View>
        </View>
      </ScrollView>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(HomeScreen)

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    paddingTop: 20
  },
  gradientContainer: {
    shadowOffset: {  width: 0,  height: 2  },
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: .5,
  },
  circle: {
    position: 'absolute',
    top: -690,
    left: -90,
    height: 600,
    width: 600
  },
  imageContainer: {
    display: 'flex',
    height: 180,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 200000,
    marginBottom: 20,
    shadowOffset: {  width: 5,  height: 5},
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: .5,
  },
  profilePic: {
    height: 180,
    width: 180,
    borderRadius: 90,
    zIndex: 20000,
  },
  name: {
    marginTop: 20,
    marginLeft: 20,
    position: 'relative',
    zIndex: 20000,
    color: 'white',
    fontSize: 30
  },
  position: {
    marginTop: 5,
    marginLeft: 20,
    position: 'relative',
    zIndex: 20000,
    color: 'white',
    fontSize: 20,
  },
  suggestedTitle: {
    color: '#4AA9C5',
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
  suggestedConnections: {
    display: 'flex',
    alignItems: 'stretch',
    shadowOffset: {  width: 0,  height: 2 },
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOpacity: .5,
    width: '100%',
    backgroundColor: 'blue'
  }
})




