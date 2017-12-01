import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { COLOR } from 'react-native-material-ui'
import { ListItem } from 'react-native-material-ui'
import Footer from './Footer'

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
  render () {
    return (
      <ScrollView style={styles.scrollView}>
        {jobItems.map((item, idx) => {
          return (
            <ListItem
              key={idx.toString()}
              style={styles.listItem}
              centerElement={{
                primaryText: item.title,
                secondaryText: 'วันที่ ' + item.date,
                tertiaryText: item.isComplete ? 'สถานะ: ดำเนินการเสร็จสิ้น' : 'สถานะ: กำลังดำเนินการ'
              }}
            />
          )
        })}
      </ScrollView>
    )
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
  listItem: {
    contentViewContainer: {
      backgroundColor: COLOR.blueGrey100,
      marginBottom: 5,
      borderRadius: 10
    },
    container: {
      borderWidth: 0,
      borderRadius: 10
    }
  }
}
