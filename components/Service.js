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
            <ServiceItem service='installation' _handlePress={() => this.props._handleChangePage('Request a Job', 'installation', 1)} />
          </View>
          <View style={styles.rowElement}>
            <ServiceItem service='cleaning' _handlePress={() => this.props._handleChangePage('Request a Job', 'cleaning', 1)} />
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.rowElement}>
            <ServiceItem service='moving' _handlePress={() => this.props._handleChangePage('Request a Job', 'moving', 1)} />
          </View>
          <View style={styles.rowElement}>
            <ServiceItem service='checking' _handlePress={() => this.props._handleChangePage('Request a Job', 'checking', 1)} />
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.rowElement}>
            <ServiceItem service='problem' _handlePress={() => this.props._handleChangePage('Request a Job', 'problem', 1)} />
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
