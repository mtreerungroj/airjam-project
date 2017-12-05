import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { COLOR } from 'react-native-material-ui'
// import t from 'tcomb-form-native'

// var Form = t.form.Form;
// var House = t.enums({
//   home: 'บ้านเดี่ยว',
//   condo: 'คอนโด',
//   build: 'ตึก'
// });

// var options = {};

export default class Step1 extends Component {
  constructor (props) {
    super(props)
    this.state = { numberAir: 1 }
  }

  render () {
    const _onPressButtonPlus = () => {
      var newValue = this.state.numberAir + 1
      this.setState({ numberAir: newValue })
    }

    const _onPressButtonMinus = () => {
      var newValue = 1
      if (this.state.numberAir > 1) {
        newValue = this.state.numberAir - 1
      }
      this.setState({ numberAir: newValue })
    }

    return (
      <View style={styles.container}>

        <Text style={styles.text}>จำนวนแอร์(เครื่อง)</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={_onPressButtonMinus} title='-' />
          <Text style={styles.text}>{this.state.numberAir}</Text>
          <Button onPress={_onPressButtonPlus} title='+' />
        </View>

        <Text style={styles.text}>เลือกสถานที่</Text>
        {/* <Form
          ref="form"
          type={House}
          options={options}
        /> */}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 10
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    alignSelf: 'center',
    color: COLOR.black
  },
  image: {
    width: 80
  },
  buttonContainer: {
    flexDirection: 'row'
  }
})
