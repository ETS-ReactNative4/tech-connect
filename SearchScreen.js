import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements'
import { LinearGradient } from 'expo'
import SuggestedConnection from './SuggestedConnection.js' 
import Connection from './Connection'
import { getAllUsers, getUserInfo } from './apiCalls'



export class SearchScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allUsers: [],
      search: ''
    }
  }

  async componentDidMount() {
    const allUsers = await getAllUsers(this.props.user.api_key)
    this.setState({ allUsers })
  }

  viewProfile = async (id) => {
    const user = await getUserInfo(id, this.props.user.api_key)
    this.props.navigation.navigate('ProfilePage', {user})
  }

  updateSearch = (search) => {
    this.setState({ search });
  };


  render() {
    const userArray = this.state.allUsers.length !== 0 && this.state.allUsers.map(user => <Connection id={ user.id } viewProfile={ this.viewProfile } />)
    return (
      <View style={styles.container}>
      <View style={styles.componentContainer}>
        <SearchBar
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.inputContainer}
          inputStyle={{}}
          lightTheme
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={this.state.search}
        />
        <ScrollView style={ styles.scrollContainer }>
          <View style={ styles.innerContainer }>
              <View style={ styles.connectionsContainer }>
                { userArray }
              </View>
          </View>
        </ScrollView>
      </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(SearchScreen)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    paddingTop: 20,
    backgroundColor: '#4AA9C5'
  },
  componentContainer: {
    flex: 1,
    backgroundColor: '#fff', 
    borderRadius: 5,
    justifyContent: 'center', 
    alignItems: 'stretch',
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  searchContainer: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10, 
    backgroundColor: '#ffffff00', 
    borderBottomWidth: 0, 
    borderTopWidth: 0
  },
  inputContainer: {
    borderRadius: 20, 
    borderWidth: 2, 
    borderColor: '#4AA9C5',
    borderBottomWidth: 2, 
    backgroundColor: '#fff'
  },
  scrollContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#FFF',
    paddingBottom: 20,
  },
  profileContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 0,
    paddingBottom: 20
  },
  connectionsContainer: {
    backgroundColor: '#4AA9C5',
    marginTop: 5,
    padding: 10,
    borderRadius: 5,
    width: '90%'
  },
  
})




