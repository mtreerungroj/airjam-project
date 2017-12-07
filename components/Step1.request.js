import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native'
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

  render () {
    return (
      <View style={styles.viewContainer}>
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
    fontSize: 18
  },
  textButton: {
    color: COLOR.black,
    fontSize: 18
  },
  buttonUp: {
    flexDirection: 'column',
    marginBottom: 10
  },
  buttonDown: {
    flexDirection: 'column',
    marginBottom: 10,
    width: '50%',
    alignSelf: 'center'
  },
  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: COLOR.grey300,
    borderColor: COLOR.grey500,
    borderWidth: 1,
    borderRadius: 10
  },
  buttonStyleClicked: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: COLOR.cyan200,
    borderColor: COLOR.grey500,
    borderWidth: 1,
    borderRadius: 10
  }
})
