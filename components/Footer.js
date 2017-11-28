import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { BottomNavigation } from 'react-native-material-ui'

export default class Footer extends Component {
  render () {
    return (
      <BottomNavigation active={this.props.active} hidden={false}>
        <BottomNavigation.Action key='service' icon='today' label='Service' />
        <BottomNavigation.Action key='joblist' icon='bookmark-border' label='Job List' />
        <BottomNavigation.Action key='setting' icon='settings' label='Setting' />
      </BottomNavigation>
    )
  }
}
