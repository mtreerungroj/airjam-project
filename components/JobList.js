import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import firebase from '../config/firebase'
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
  constructor (props) {
    super(props)
    this.state = {
      jobItems: []
    }
  }

  componentDidMount () {
    let jobItems = []
    firebase
      .database()
      .ref('jobs')
      .orderByChild('date')
      .once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          jobItems.push(childSnapshot.val()) // AESC
        })
      })
      .then(() => {
        this.setState({ jobItems: jobItems.reverse() }) // DESC
      })
  }

  render () {
    return (
      <ScrollView style={styles.scrollView}>
        {this.state.jobItems.map((item, idx) => {
          return (
            <ListItem
              key={idx.toString()}
              // style={getStyle}
              style={getStyle(item.isComplete)}
              // style={{
              //   tertiaryText: {
              //     color: item.isComplete ? COLOR.green500 : COLOR.red500
              //   }
              // }}
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
  imgElement: {
    width: 60,
    height: 60,
    marginRight: 10
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
