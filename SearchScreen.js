import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements'
import { LinearGradient } from 'expo'
import NavigationBar from './NavigationBar'
import SuggestedConnection from './SuggestedConnection.js' 
import { getAllUsers } from './apiCalls'


export class SearchScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allUsers: ['kylie', 'kaylee', 'isaac', 'bailey'],
      search: ''
    }
  }

  async componentDidMount() {
    // const allUsers = await getAllUsers('1234567891011121')
    // this.setState({ allUsers })
  }

  updateSearch = (search) => {
    this.setState({ search });
  };


  render() {
    const userArray = this.state.allUsers.length && this.state.allUsers.map(user => <SuggestedConnection suggestion={user} />)
    console.log(userArray) 
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
        <View styles={styles.suggestedConnections}>
        { userArray }
        </View>
        <NavigationBar />
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




