import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { BottomNavigation } from 'react-native-material-ui'
import { COLOR } from 'react-native-material-ui'

export default class StepBar extends Component {
  render () {
    return (
      <BottomNavigation>
        <BottomNavigation.Action key='step1' icon='comment' />
        <BottomNavigation.Action key='step2' icon='location-on' />
        <BottomNavigation.Action key='step3' icon='event-available' />
        <BottomNavigation.Action key='step4' icon='credit-card' />
      </BottomNavigation>
    )
  }
}
