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
      active: 'service',
      step: 0
    }
  }

  _handleChangePage = (title, active, step = 0) => {
    this.setState({ title, active, step })
  }

  _handleChangeStep = step => {
    if (step == 0) {
      // add new job list to firebase here
      this.setState({ step, title: 'Job List', active: 'joblist' })
    } else this.setState({ step })
  }

  _renderBody = () => {
    if (this.state.active == 'service') return <Service _handleChangePage={(title, active, step) => this._handleChangePage(title, active, step)} />
    else if (this.state.active == 'joblist') return <JobList />
    else if (serviceType.includes(this.state.active)) {
      return <RequestJob service={this.state.active} step={this.state.step} />
    } else return <Text>Error Page 404</Text>
  }

  render () {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View style={{ flex: 1 }}>
          <Header title={this.state.title} _handleBack={() => this._handleChangePage('AirJam', 'service')} />
          <View style={{ flex: 0.9 }}>
            {this._renderBody()}
          </View>
          <View style={{ flex: 0.1 }}>
            <Footer active={this.state.active} step={this.state.step} _handleChangePage={this._handleChangePage} _handleChangeStep={this._handleChangeStep} />
          </View>
        </View>
      </ThemeProvider>
    )
  }
}
