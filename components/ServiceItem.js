import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default class ServiceItem extends Component {
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
      <TouchableOpacity style={styles.container} onPress={this.props._handlePress}>
        {this._renderImage(this.props.service)}
      </TouchableOpacity>
    )
  }
}

const styles = {
  imageElement: {
    height: '100%',
    width: 'auto'
  },
  container: {
    margin: 10
  }
}
