import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { COLOR, ThemeProvider } from 'react-native-material-ui'
// import Service from './components/Service'
// import JobList from './components/JobList'
import Footer from './components/Footer'
import Header from './components/Header'

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
        <View style={{ flex: 1 }}>
          <Header />
          <View style={{ flex: 0.9 }}>
            <Text>Centent</Text>
          </View>
          <View style={{ flex: 0.1 }}>
            <Footer />
          </View>
        </View>
      </ThemeProvider>
    )
  }
}
