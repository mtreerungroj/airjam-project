import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { BottomNavigation } from 'react-native-material-ui'
import { COLOR } from 'react-native-material-ui'

export default class StepBar extends Component {
  render () {
    return (
      <BottomNavigation>
        <BottomNavigation.Action key='step1' icon='comment' style={getBarStyle(1, this.props.step)} />
        <BottomNavigation.Action key='step2' icon='location-on' style={getBarStyle(2, this.props.step)} />
        <BottomNavigation.Action key='step3' icon='event-available' style={getBarStyle(3, this.props.step)} />
        <BottomNavigation.Action key='step4' icon='credit-card' style={getBarStyle(4, this.props.step)} />
      </BottomNavigation>
    )
  }
}

const getBarStyle = (self, step) => ({
  container: {
    backgroundColor: step >= self ? COLOR.orange500 : COLOR.white,
    borderColor: 'white',
    borderRightWidth: self == 4 ? 0 : 1
  }
})
