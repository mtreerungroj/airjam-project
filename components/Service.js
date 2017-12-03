import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Footer from './Footer'
import ServiceItem from './ServiceItem'

export default class Service extends Component {
  render () {
    return (
      <View style={styles.viewContainer}>
        <View style={styles.rowContainer}>

          <View style={styles.rowElement}>
            <ServiceItem service='installation' />
          </View>
          <View style={styles.rowElement}>
            <ServiceItem service='cleaning' />
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.rowElement}>
            <ServiceItem service='moving' />
          </View>
          <View style={styles.rowElement}>
            <ServiceItem service='checking' />
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.rowElement}>
            <ServiceItem service='problem' />
          </View>
          <View style={styles.rowElement} />

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
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  rowElement: {
    flex: 0.5
  }
}
