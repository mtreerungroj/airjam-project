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

var buttons = ['แอร์ไม่เย็น', 'แอร์มีน้ำหยด', 'แอร์เปิดไม่ติด', 'แอร์มีเสียงดัง', 'compressor ไม่ทำงาน', 'อื่น']
var buttonClick = []

export default class Step1Problem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      styleIndex0: 0,
      styleIndex1: 0,
      styleIndex2: 0,
      styleIndex3: 0,
      styleIndex4: 0,
      styleIndex5: 0,
      isVisible: false,
      text: 'ปัญหาอื่นที่ต้องการแก้ไข'
    }
  }

  toggle () {
    this.setState({
      isVisible: !this.state.isVisibles
    })
  }

  onButtonPress (id) {
    var button = buttons[id]
    buttonClick.push(button)
    // var value = this.refs.form.getValue(); getValue from form after Next
    console.log(buttonClick)
    switch (id) {
      case 0:
        this.setState({ styleIndex0: 1 })
        break
      case 1:
        this.setState({ styleIndex1: 1 })
        break
      case 2:
        this.setState({ styleIndex2: 1 })
        break
      case 3:
        this.setState({ styleIndex3: 1 })
        break
      case 4:
        this.setState({ styleIndex4: 1 })
        break
      case 5:
        this.setState({ styleIndex5: 1 })
        break
      default:
        this.setState({ styleIndex5: 1 })
        break
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>เลือกปัญหาแอร์</Text>
        <View style={styles.buttonUp}>
          <TouchableOpacity onPress={() => this.onButtonPress(0)} style={this.state.styleIndex0 === 0 ? styles.buttonStyle : styles.buttonStyleClicked}>
            <Text style={{ color: 'black', fontSize: 22 }}>แอร์ไม่เย็น</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onButtonPress(1)} style={this.state.styleIndex1 === 0 ? styles.buttonStyle : styles.buttonStyleClicked}>
            <Text style={{ color: 'black', fontSize: 22 }}>แอร์มีน้ำหยด</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onButtonPress(2)} style={this.state.styleIndex2 === 0 ? styles.buttonStyle : styles.buttonStyleClicked}>
            <Text style={{ color: 'black', fontSize: 22 }}>แอร์เปิดไม่ติด</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onButtonPress(3)} style={this.state.styleIndex3 === 0 ? styles.buttonStyle : styles.buttonStyleClicked}>
            <Text style={{ color: 'black', fontSize: 22 }}>แอร์มีเสียงดัง</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onButtonPress(4)} style={this.state.styleIndex4 === 0 ? styles.buttonStyle : styles.buttonStyleClicked}>
            <Text style={{ color: 'black', fontSize: 22 }}>compressor ไม่ทำงาน</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.onButtonPress(5)
              this.toggle()
            }}
            style={this.state.styleIndex5 === 0 ? styles.buttonStyle : styles.buttonStyleClicked}
          >
            <Text style={{ color: 'black', fontSize: 22 }}>อื่น</Text>
          </TouchableOpacity>

          <AnimatedHideView visible={this.state.isVisible}>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => this.setState({ text })} value={this.state.text} />
          </AnimatedHideView>
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
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column',
    borderColor: '#ffffff',
    borderWidth: 5
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
