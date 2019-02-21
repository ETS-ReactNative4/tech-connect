import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar, ButtonGroup } from 'react-native-elements'
import { LinearGradient } from 'expo'
import SuggestedConnection from './SuggestedConnection.js' 
import Connection from './Connection'
import { getAllUsers, getUserInfo, getUsersFilter } from './apiCalls'
import Icon from 'react-native-vector-icons/Feather'


export class SearchScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allUsers: [],
      search: '',
      selectedIndex: 0,
      loading: true
    }
  }

  async componentDidMount() {
    const allUsers = await getAllUsers(this.props.user.api_key)
    this.setState({ allUsers, loading: false })
  }

  viewProfile = async (id) => {
    const user = await getUserInfo(id, this.props.user.api_key)
    this.props.navigation.navigate('ProfilePage', {user})
  }

  updateIndex = (selectedIndex) => {
    this.setState({selectedIndex})
  }

  getFilteredUsers = async () => {
    this.setState({ allUsers: [], loading: true })
    const { selectedIndex, search } = this.state
    const queryParams = ['name', 'city', 'position', 'employer']
    const allUsers = await getUsersFilter(this.props.user.api_key, queryParams[selectedIndex], search)
    this.setState({ allUsers, loading: false })
  }

  render() {
    const { allUsers, selectedIndex, search, loading } = this.state
    const userArray = allUsers.map(user => <Connection connection={ user } viewProfile={(() => this.viewProfile(user.id)) } key={ user.id }/>)
    const buttons = ['Name', 'Location', 'Position', 'Employer']

    return (
      <View style={styles.container}>
      <View style={styles.componentContainer}>
        <Text style={styles.search}>Search by:</Text>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          selectedButtonStyle={{backgroundColor: '#4AA9C5'}}
          buttons={buttons}
          containerStyle={{height: 30}}
        />
        <SearchBar
          onSubmitEditing={ this.getFilteredUsers }
          searchIcon= {
            <LinearGradient
              colors={['#4AA9C5', '#6364c1', '#93548F']}
              start={0.4}
              style={styles.gradient} >
              <Icon
                name='search'
                size={16}
                color='#FFF'
                onPress={ this.getFilteredUsers }
              />
            </LinearGradient>
          }
          leftIconContainerStyle={styles.icon} 
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.inputContainer}
          lightTheme
          placeholder="Type Here..."
          onChangeText={(text) => this.setState({search: text})} 
          value={search}
        />
        <ScrollView contentContainerStyle={{alignItems: 'center'}} style={ styles.scrollContainer }>
              <View style={ styles.connectionsContainer }>
                { !loading ? userArray : <ActivityIndicator size="large" color="#fff" /> }
                { 
                  (!userArray.length && !loading) && 
                    <Text style={{color: '#fff'}}>No users were found.</Text> 
                }
              </View>
        </ScrollView>
      </View>
      </View>
    )
  }
}

export const mapStateToProps = (state) => ({
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
  search: {
    marginTop: 10, 
    marginLeft: 10,
    fontSize: 20
  },
  icon: {
    marginRight: 5,
    marginLeft: 3,
    width: 36,
    height: 36,
    borderRadius: 50,
    backgroundColor: '#4AA9C5'
  },
  gradient: {
    borderRadius: 300, 
    width: 36, 
    height: 36, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  componentContainer: {
    flex: 1,
    backgroundColor: '#fff', 
    borderRadius: 5,
    justifyContent: 'center', 
    padding: 15,
    alignItems: 'stretch',
    marginTop: 25,
    marginRight: 20,
    marginLeft: 20,
  },
  searchContainer: {
    width: '100%',
    marginBottom: 10, 
    backgroundColor: '#ffffff00', 
    borderBottomWidth: 0, 
    borderTopWidth: 0
  },
  inputContainer: {
    borderRadius: 30, 
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
  connectionsContainer: {
    backgroundColor: '#4AA9C5',
    padding: 10,
    borderRadius: 5,
    width: '100%'
  }
})




