import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-material-ui'

export default class ServiceItem extends Component {
  _handlePress = () => {
    console.log('press')
  }

  render () {
    return (
      <TouchableOpacity style={{ margin: 10 }} onPress={this._handlePress}>
        <Image style={styles.imageElement} source={require('../assets/image/complete.png')} />
      </TouchableOpacity>
    )
  }
}

const styles = {
  imageElement: {
    height: '100%',
    width: 'auto'
  }
}
