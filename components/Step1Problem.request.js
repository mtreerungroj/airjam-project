import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Picker } from 'react-native'
import { COLOR } from 'react-native-material-ui'
import AnimatedHideView from 'react-native-animated-hide-view'

export default class Step1Problem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      problem1: false,
      problem2: false,
      problem3: false,
      problem4: false,
      problem5: false,
      problem6: false
    }
  }

  componentDidMount () {
    const problems = this.props.problems
    this.setState(problems)
  }

  onButtonPress = async problem => {
    await this.setState({ [problem]: !this.state[problem] })
    this.props._handleChange('problems', this.state)
  }

  _onSelect = place => {
    this.props._handleChange('place', place)
  }

  render () {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.text}>เลือกปัญหาแอร์</Text>
        <View style={styles.buttonUp}>
          <TouchableOpacity onPress={() => this.onButtonPress('problem1')} style={!this.state.problem1 ? styles.buttonStyle : styles.buttonStyleClicked}>
            <Text style={styles.textButton}>แอร์ไม่เย็น</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onButtonPress('problem2')} style={!this.state.problem2 ? styles.buttonStyle : styles.buttonStyleClicked}>
            <Text style={styles.textButton}>แอร์มีน้ำหยด</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onButtonPress('problem3')} style={!this.state.problem3 ? styles.buttonStyle : styles.buttonStyleClicked}>
            <Text style={styles.textButton}>แอร์เปิดไม่ติด</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onButtonPress('problem4')} style={!this.state.problem4 ? styles.buttonStyle : styles.buttonStyleClicked}>
            <Text style={styles.textButton}>แอร์มีเสียงดัง</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onButtonPress('problem5')} style={!this.state.problem5 ? styles.buttonStyle : styles.buttonStyleClicked}>
            <Text style={styles.textButton}>compressor ไม่ทำงาน</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onButtonPress('problem6')} style={!this.state.problem6 ? styles.buttonStyle : styles.buttonStyleClicked}>
            <Text style={styles.textButton}>อื่นๆ</Text>
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
    marginTop: 5,
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
    marginBottom: 8,
    paddingLeft: 20,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR.grey500
  },
  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
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
    padding: 18,
    backgroundColor: COLOR.cyan200,
    borderColor: COLOR.grey500,
    borderWidth: 1,
    borderRadius: 10
  }
})
