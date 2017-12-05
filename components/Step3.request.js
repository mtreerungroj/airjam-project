import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TextInput, Image, Keyboard } from 'react-native'
import DatePicker from 'react-native-datepicker'
import { COLOR } from 'react-native-material-ui'

export default class Step3 extends Component {
  componentDidMount () {
    if (this.props.date == undefined || this.props.time == undefined) this.props._setDateTime()
  }

  render () {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.text}>เบอร์ติดต่อ</Text>
        <TextInput
          autoFocus
          keyboardType='numeric'
          placeholder='กรอกเบอร์ติดต่อของคุณ'
          maxLength={10}
          onChangeText={contact => this.props._handleChange('contact', contact)}
          style={styles.datePicker}
        />
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
    marginTop: 10,
    color: COLOR.black,
    fontSize: 18
  },
  datePicker: {
    width: 200,
    marginBottom: 10
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
