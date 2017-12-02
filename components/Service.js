import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Footer from './Footer'

export default class Service extends Component {
  render () {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.rowElement}>Hello</Text>
          <Text style={styles.rowElement}>World</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.rowElement}>Hello</Text>
          <Text style={styles.rowElement}>World</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.rowElement}>Hello</Text>
          <Text style={styles.rowElement}>World</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  viewContainer: {
    flexDirection: 'column',
    flex: 3
  },
  rowContainer: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowElement: {
    flex: 0.5
  }
}
