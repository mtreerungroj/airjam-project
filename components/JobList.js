import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-material-ui'
import Footer from './Footer'

const jobItems = [
  {
    title: 'ตรวจเช็คสภาพ',
    date: '30 พฤศจิกายน 2560', // format?
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
  render () {
    return (
      <View>
        {jobItems.map((item, idx) => (
          <ListItem
            key={idx.toString()}
            divider
            centerElement={{
              primaryText: item.title,
              secondaryText: 'วันที่ ' + item.date,
              tertiaryText: item.isComplete ? 'สถานะ: ดำเนินการเสร็จสิ้น' : 'สถานะ: กำลังดำเนินการ'
            }}
            onPress={() => {}}
          />
        ))}
      </View>
    )
  }
}
