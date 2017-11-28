import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { BottomNavigation } from 'react-native-material-ui'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Scene, Router, Actions } from 'react-native-router-flux'

export default class Footer extends Component {
  render () {
    return (
      <BottomNavigation active={this.props.active} hidden={false}>
        <BottomNavigation.Action key='service' icon='today' label='Service' onPress={() => Actions.service()} />
        <BottomNavigation.Action key='joblist' icon='bookmark-border' label='Job List' onPress={() => Actions.joblist()} />
        <BottomNavigation.Action key='setting' icon='settings' label='Setting' />
      </BottomNavigation>
    )
  }
}
