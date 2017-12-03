import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { COLOR, ThemeProvider } from 'react-native-material-ui'
import Footer from './components/Footer'
import Header from './components/Header'
import Service from './components/Service'
import JobList from './components/JobList'
import RequestJob from './components/RequestJob'

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
const serviceType = ['installation', 'cleaning', 'moving', 'checking', 'problem']

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'AirJam',
      active: 'service'
    }
  }

  _handleChangePage = (title, active) => {
    this.setState({ title, active })
  }

  _renderBody = () => {
    if (this.state.active == 'service') return <Service _handleChangePage={(title, active) => this._handleChangePage(title, active)} />
    else if (this.state.active == 'joblist') return <JobList />
    else if (serviceType.includes(this.state.active)) return <RequestJob service={this.state.active} />
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
            {this.state.active == 'service' || this.state.active == 'joblist'
              ? <Footer active={this.state.active} _handleChangePage={this._handleChangePage} />
              : <Text>footer</Text>}
          </View>
        </View>
      </ThemeProvider>
    )
  }
}
