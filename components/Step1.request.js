import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity, Picker } from 'react-native'
import { COLOR } from 'react-native-material-ui'

export default class Step1 extends Component {
  _onSelect = place => {
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
          <TouchableOpacity style={styles.buttonStyleLeft} onPress={this._decrease}>
            <Text style={styles.textButton}>-</Text>
          </TouchableOpacity>

          <Text style={styles.textQuantity}>{this.props.quantity}</Text>

          <TouchableOpacity style={styles.buttonStyleRight} onPress={this._increase}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>เลือกสถานที่</Text>
        <View style={styles.buttonDown}>
          <Picker selectedValue={this.props.place} onValueChange={(place, idx) => this._onSelect(place)}>
            <Picker.Item label='บ้านเดี่ยว' value='บ้านเดี่ยว' />
            <Picker.Item label='คอนโดมีเนียม' value='คอนโดมีเนียม' />
            <Picker.Item label='ตึก/สำนักงาน' value='ตึก/สำนักงาน' />
          </Picker>
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
    width: '80%',
    height: 50,
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
    paddingLeft: 20,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR.grey500
  },
  buttonStyleLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    borderWidth: 0,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: COLOR.cyan200
  },
  buttonStyleRight: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    borderWidth: 0,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: COLOR.cyan200
  }
})
