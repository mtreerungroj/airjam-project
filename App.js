import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { COLOR, ThemeProvider } from 'react-native-material-ui'
import Footer from './components/Footer'
import Header from './components/Header'
import Service from './components/Service'
import JobList from './components/JobList'

const uiTheme = {
  palette: {
    primaryColor: COLOR.cyan500
  },
  toolbar: {
    container: {
      height: 50
    }
  }
}

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Service',
      active: 'service'
    }
  }

  _handleChangePage = (title, active) => {
    this.setState({ title, active })
  }

  _renderBody = () => {
    if (this.state.active == 'service') return <Service />
    else if (this.state.active == 'joblist') return <JobList />
    else return <Text>Error Page 404</Text>
  }

  render () {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View style={{ flex: 1 }}>
          <Header title={this.state.title} />
          <View style={{ flex: 0.9 }}>
            {this._renderBody()}
          </View>
          <View style={{ flex: 0.1 }}>
            <Footer active={this.state.active} _handleChangePage={this._handleChangePage} />
          </View>
        </View>
      </ThemeProvider>
    )
  }
}
