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
            <View style={styles.profileContainer}>
              <View style={ styles.connectionsContainer }>
                { userArray }
              </View>
            </View>
          </View>
        </ScrollView>
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
    display: 'flex',
    alignItems: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    paddingTop: 20
  },
  searchContainer: {
    marginTop: 30,
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
    backgroundColor: '#4AA9C5',
  },
  innerContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    paddingTop: 20,
    backgroundColor: '#4AA9C5',
    paddingBottom: 20,
  },
  profileContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 0,
    paddingBottom: 20,
  },
  connectBtn: {
    backgroundColor: '#93548F',
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 20,
    shadowOffset: {  width: 0,  height: 2 },
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: .5,
    marginTop: 10,
  },
  connections: {
    marginLeft: 20,
    marginTop: 15,
    fontSize: 15,
  },
  connectionsContainer: {
    backgroundColor: '#4AA9C5',
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    borderRadius: 5
  },
  
})




