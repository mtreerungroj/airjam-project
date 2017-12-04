import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native'
import DatePicker from 'react-native-datepicker'

export default class Step3 extends Component {
  render () {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.text}>วันที่ต้องการใช้บริการ</Text>
        <DatePicker
          style={styles.datePicker}
          date={this.props.date}
          mode='date'
          format='YYYY-MM-DD'
          minDate={this.props.date}
          confirmBtnText='Confirm'
          cancelBtnText='Cancel'
          customStyles={styles.customStyles}
          onDateChange={date => this.props._handleChange('date', date)}
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
    marginTop: 10
  },
  datePicker: {
    width: 200
  },
  customStyles: {
    dateIcon: {
      position: 'absolute',
      left: 0,
      top: 4,
      marginLeft: 0
    },
    dateInput: {
      marginLeft: 36
    }
  }
}
