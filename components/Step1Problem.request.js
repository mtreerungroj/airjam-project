import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, TextInput } from 'react-native'
import t from 'tcomb-form-native'
import AnimatedHideView from 'react-native-animated-hide-view'

var Form = t.form.Form
var House = t.enums({
  home: 'บ้านเดี่ยว',
  condo: 'คอนโด',
  build: 'ตึก'
})

var options = {}

// var buttons = ['แอร์ไม่เย็น', 'แอร์มีน้ำหยด', 'แอร์เปิดไม่ติด', 'แอร์มีเสียงดัง', 'compressor ไม่ทำงาน', 'อื่น']
// var buttonClick = []

export default class Step1Problem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      problem1: false,
      problem2: false,
      problem3: false,
      problem4: false,
      problem5: false,
      problem6: false,
      isVisible: false,
      text: 'ปัญหาอื่นที่ต้องการแก้ไข'
    }
  }

  toggle () {
    this.setState({
      isVisible: !this.state.isVisibles
    })
  }

  onButtonPress (problem) {
    this.setState({ [problem]: !this.state[problem] })
  }

  render () {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.head}>เลือกปัญหาแอร์</Text>
        <View style={styles.buttonUp}>
          <TouchableOpacity onPress={() => this.onButtonPress('problem1')} style={!this.state.problem1 ? styles.buttonStyle : styles.buttonStyleClicked}>
            <Text style={{ color: 'black', fontSize: 22 }}>แอร์ไม่เย็น</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onButtonPress('problem2')} style={!this.state.problem2 ? styles.buttonStyle : styles.buttonStyleClicked}>
            <Text style={{ color: 'black', fontSize: 22 }}>แอร์มีน้ำหยด</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onButtonPress('problem3')} style={!this.state.problem3 ? styles.buttonStyle : styles.buttonStyleClicked}>
            <Text style={{ color: 'black', fontSize: 22 }}>แอร์เปิดไม่ติด</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onButtonPress('problem4')} style={!this.state.problem4 ? styles.buttonStyle : styles.buttonStyleClicked}>
            <Text style={{ color: 'black', fontSize: 22 }}>แอร์มีเสียงดัง</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onButtonPress('problem5')} style={!this.state.problem5 ? styles.buttonStyle : styles.buttonStyleClicked}>
            <Text style={{ color: 'black', fontSize: 22 }}>compressor ไม่ทำงาน</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onButtonPress('problem6')} style={!this.state.problem6 ? styles.buttonStyle : styles.buttonStyleClicked}>
            <Text style={{ color: 'black', fontSize: 22 }}>อื่นๆ</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.head}>เลือกสถานที่</Text>
        <View style={styles.buttonUp}>
          <Form ref='form' type={House} options={options} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 10
  },
  head: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center'
  },
  buttonUp: {
    flex: 1,
    flexDirection: 'column'
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyleClicked: {
    flex: 1,
    backgroundColor: '#FF9800',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
