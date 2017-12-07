import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { COLOR } from 'react-native-material-ui'
import t from 'tcomb-form-native'

var Form = t.form.Form
var placeTypes = t.enums({
  บ้านเดี่ยว: 'บ้านเดี่ยว',
  คอนโดมีเนียม: 'คอนโดมีเนียม',
  'ตึก/สำนักงาน': 'ตึก/สำนักงาน'
})

export default class Step1 extends Component {
  _onSelect = () => {
    const place = this.refs.place.getValue()
    this.props._handleChange('place', place)
  }

  _increase = () => {
    this.props._handleChange('quantity', this.props.quantity + 1)
  }

  _decrease = () => {
    this.props.quantity > 1 && this.props._handleChange('quantity', this.props.quantity - 1)
  }

  render () {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.text}>จำนวนแอร์ (เครื่อง)</Text>
        <View style={styles.buttonUp}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this._decrease}>
            <Text style={styles.textButton}>-</Text>
          </TouchableOpacity>

          <Text style={styles.textQuantity}>{this.props.quantity}</Text>

          <TouchableOpacity style={styles.buttonStyle} onPress={this._increase}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>เลือกสถานที่</Text>
        <View style={styles.buttonDown}>
          <Form ref='place' style={{ backgroundColor: 'red' }} type={placeTypes} value={this.props.place} onChange={this._onSelect} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    marginLeft: 20,
    marginRight: 20
  },
  text: {
    marginBottom: 10,
    marginTop: 10,
    color: COLOR.black,
    alignSelf: 'center',
    fontSize: 16
  },
  textQuantity: {
    flex: 1,
    color: COLOR.grey700,
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center'
  },
  textButton: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 24,
    color: COLOR.grey700
  },
  buttonUp: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '60%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLOR.cyan200
  },
  buttonDown: {
    flexDirection: 'column',
    marginBottom: 10,
    width: '50%',
    alignSelf: 'center'
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: COLOR.cyan200
  }
})
