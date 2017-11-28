import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import { COLOR, ThemeProvider } from 'react-native-material-ui'
import Service from './components/Service'
import JobList from './components/JobList'

const uiTheme = {
  palette: {
    primaryColor: COLOR.orange400
  },
  toolbar: {
    container: {
      height: 50
    }
  }
}

export default class App extends Component {
  render () {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <Router>
          <Scene key='root' navigationBarStyle={{ backgroundColor: COLOR.cyan500 }}>
            <Scene key='service' component={Service} title='AirJam' initial />
            <Scene key='joblist' component={JobList} title='Job List' initial />
          </Scene>
        </Router>
      </ThemeProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
