import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image } from 'react-native'
import DatePicker from 'react-native-datepicker'

export default class Step3 extends Component {
  render () {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.text}>วันที่ต้องการใช้บริการ</Text>
        <DatePicker
          mode='date'
          date={this.props.date}
          format='YYYY-MM-DD'
          minDate={this.props.date}
          style={styles.datePicker}
          customStyles={styles.customStyles}
          onDateChange={date => this.props._handleChange('date', date)}
        />
        <Text style={styles.text}>เวลาที่สะดวก</Text>
        <DatePicker
          mode='time'
          date={this.props.time}
          format='HH:mm'
          minuteInterval={10}
          iconComponent={<Image style={styles.imageIcon} source={require('../assets/icon/time.png')} />}
          style={styles.datePicker}
          customStyles={styles.customStyles}
          onDateChange={time => this.props._handleChange('time', time)}
        />

      </View>
    )
  }
}

const styles = {
  viewContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginBottom: 10,
    marginTop: 20
  },
  datePicker: {
    width: 200
  },
  imageIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
    marginLeft: 5,
    height: 32,
    width: 32
  },
  customStyles: {
    dateIcon: {
      position: 'absolute',
      left: 0,
      top: 4,
      marginLeft: 5
    },
    dateText: {
      marginLeft: 30
    }
  }
}
