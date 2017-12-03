import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { COLOR } from 'react-native-material-ui'
import { BottomNavigation } from 'react-native-material-ui'
import { Button } from 'react-native-material-ui'

export default class Footer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return this.props.active == 'service' || this.props.active == 'joblist'
      ? <BottomNavigation active={this.props.active} hidden={false}>
        <BottomNavigation.Action key='service' icon='today' label='Service' onPress={() => this.props._handleChangePage('AirJam', 'service')} />
        <BottomNavigation.Action key='joblist' icon='bookmark-border' label='Job List' onPress={() => this.props._handleChangePage('Job List', 'joblist')} />
        <BottomNavigation.Action key='setting' icon='settings' label='Setting' />
      </BottomNavigation>
      : <Button style={{ container: { height: '100%', backgroundColor: COLOR.orange500 }, text: { color: COLOR.white } }} primary text='Next' />
  }
}
