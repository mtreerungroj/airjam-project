import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-material-ui'

export default class ServiceItem extends Component {
  _handlePress = () => {
    console.log('press')
  }

  _renderImage = service => {
    switch (service) {
      case 'installation':
        return <Image style={styles.imageElement} source={require('../assets/image/s-installation.png')} />
      case 'cleaning':
        return <Image style={styles.imageElement} source={require('../assets/image/s-cleaning.png')} />
      case 'moving':
        return <Image style={styles.imageElement} source={require('../assets/image/s-moving.png')} />
      case 'checking':
        return <Image style={styles.imageElement} source={require('../assets/image/s-checking.png')} />
      case 'problem':
        return <Image style={styles.imageElement} source={require('../assets/image/s-problem.png')} />
      default:
        return false
    }
  }

  render () {
    return (
      <TouchableOpacity onPress={this._handlePress}>
        {this._renderImage(this.props.service)}
        {/* <Image style={styles.imageElement} source={require('../assets/image/s-installation.png')} /> */}
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
