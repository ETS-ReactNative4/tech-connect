import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>{this.props.user.name}</Text>
        <Text>{this.props.user.position.job_title}</Text>
        <View>
          
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
    alignItems: 'center',
    justifyContent: 'center',
  }
})