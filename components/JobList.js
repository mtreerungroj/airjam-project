import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { getJobItems } from '../config/helper'
import { COLOR } from 'react-native-material-ui'
import { ListItem } from 'react-native-material-ui'
import Footer from './Footer'
import { Bubbles } from 'react-native-loader'

const jobItems = [
  {
    title: 'ตรวจเช็คสภาพ',
    date: '30 พฤศจิกายน 2560',
    isComplete: false
  },
  {
    title: 'ล้างแอร์',
    date: '22 พฤศจิกายน 2560',
    isComplete: false
  },
  {
    title: 'แอร์มีปัญหา: แอร์มีน้ำหยด',
    date: '14 พฤศจิกายน 2560',
    isComplete: true
  },
  {
    title: 'ตรวจเช็คสภาพ',
    date: '30 พฤศจิกายน 2560',
    isComplete: false
  },
  {
    title: 'ล้างแอร์',
    date: '22 พฤศจิกายน 2560',
    isComplete: false
  },
  {
    title: 'แอร์มีปัญหา: แอร์มีน้ำหยด',
    date: '14 พฤศจิกายน 2560',
    isComplete: true
  }
]

export default class JobList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      jobItems: [],
      isLoading: true
    }
  }

  componentDidMount () {
    const that = this
    getJobItems().then(res => that.setState(res)).catch(res => that.setState(res))
  }

  render () {
    return this.state.isLoading
      ? <View style={styles.viewContainer}>
        <Bubbles size={10} color={COLOR.cyan500} />
      </View>
      : <ScrollView style={styles.scrollView}>
        {this.state.jobItems.map((item, idx) => {
          return (
            <ListItem
              key={idx.toString()}
              style={getStyle(item.isComplete)}
              centerElement={{
                primaryText: item.title,
                secondaryText: 'วันที่ ' + item.date,
                tertiaryText: item.isComplete ? 'สถานะ: ดำเนินการเสร็จสิ้น' : 'สถานะ: กำลังดำเนินการ'
              }}
              rightElement={
                  item.isComplete
                    ? <Image style={styles.imgElement} source={require('../assets/image/complete.png')} />
                    : <Image style={styles.imgElement} source={require('../assets/image/not-complete.png')} />
                }
              />
          )
        })}
      </ScrollView>
  }
}

const styles = {
  scrollView: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingBottom: 100,
    paddingVertical: 10
  },
  imgElement: {
    width: 60,
    height: 60,
    marginRight: 10
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

const getStyle = isComplete => ({
  contentViewContainer: {
    backgroundColor: COLOR.blueGrey100,
    marginBottom: 5,
    borderRadius: 10
  },
  container: {
    borderWidth: 0,
    borderRadius: 10
  },
  tertiaryText: {
    color: isComplete ? COLOR.green500 : COLOR.red500
  }
})
