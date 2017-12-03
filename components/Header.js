import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Toolbar } from 'react-native-material-ui'
import VectorIcon from 'react-native-vector-icons/MaterialIcons'

export default class Header extends Component {
  render () {
    return (
      <Toolbar
        centerElement={this.props.title}
        leftElement={this.props.title == 'Request a Job' ? 'arrow-back' : ''}
        onLeftElementPress={this.props._handleBack}
      />
    )
  }
}
