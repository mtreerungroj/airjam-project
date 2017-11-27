import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import { colors } from './styles/colors'
import Service from './components/Service'

export default class App extends Component {
  render () {
    return (
      <Router>
        <Scene key='root' navigationBarStyle={{ backgroundColor: colors.cyan500 }}>
          <Scene key='service' component={Service} title='AirJam' initial />
        </Scene>
      </Router>
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
