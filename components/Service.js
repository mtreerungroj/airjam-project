import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Footer from './Footer'

export default class Service extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.9 }}>
          <Text>service here 1234</Text>
        </View>
        <View style={{ flex: 0.1 }}>
          <Footer active='service' />
        </View>
      </View>
    )
  }
}
