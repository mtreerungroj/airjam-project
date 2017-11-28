import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { BottomNavigation } from 'react-native-material-ui'

export default class Service extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: 'service'
    }
  }
  render () {
    return (
      <View>
        <Text>service here 1234</Text>
        <BottomNavigation active={this.state.active} hidden={false}>
          <BottomNavigation.Action
            key='service'
            icon='today'
            label='Today'
            // onPress={() => this.setState({ active: 'today' })}
          />
          <BottomNavigation.Action
            key='joblist'
            icon='people'
            label='People'
            // onPress={() => this.setState({ active: 'people' })}
          />
          <BottomNavigation.Action
            key='settings'
            icon='settings'
            label='Settings'
            // onPress={() => this.setState({ active: 'settings' })}
          />
        </BottomNavigation>
      </View>
    )
  }
}
