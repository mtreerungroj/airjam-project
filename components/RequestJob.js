import React, { Component } from 'react'
import { Platform, StyleSheet, Dimensions, Text, View, ScrollView, Image, ToastAndroid } from 'react-native'
import StepBar from './StepBar'
import Step1 from './Step1.request'
import Step1Problem from './Step1Problem.request'
import Step2 from './Step2.request'
import Step3 from './Step3.request'
import Step4 from './Step4.request'
import { getCurrentDate, postJobItem } from '../config/helper'

let dataStore = {}

export const addNewJobToDatabase = () => {
  return new Promise((resolve, reject) => {
    dataStore.createAt = new Date()
    postJobItem(dataStore)
      .then(res => {
        ToastAndroid.show(res, ToastAndroid.SHORT)
        resolve({ title: 'Job List', active: 'joblist' })
      })
      .catch(res => {
        ToastAndroid.show(res, ToastAndroid.SHORT)
        resolve({ title: 'AirJam', active: 'airjam' })
      })
  })
}

export default class RequestJob extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this._setInitialMaps()
  }

  _setDateTime = () => {
    let tmpDateTime = getCurrentDate()
    this.setState(tmpDateTime)
    dataStore.date = tmpDateTime.date
    dataStore.time = tmpDateTime.time
  }

  _setInitialMaps = () => {
    let { width, height } = Dimensions.get('window')
    const aspectRatio = width / height
    const latitude = 7.0130963
    const longitude = 100.502331
    const latitudeDelta = 0.0922
    const longitudeDelta = latitudeDelta * aspectRatio

    this.setState({ region: { latitude, longitude, latitudeDelta, longitudeDelta } })
    dataStore.region = { latitude, longitude, latitudeDelta, longitudeDelta }
  }

  _handleChange = (name, value) => {
    console.log('valueeeeeeeeeee', value)
    this.setState({ [name]: value })
    dataStore[name] = value
    console.log(this.state)
    console.log('datastore:', dataStore)
  }

  _renderBody = () => {
    switch (this.props.step) {
      case 1: {
        if (this.props.service == 'problem') return <Step1Problem _handleChange={this._handleChange} />
        else return <Step1 _handleChange={this._handleChange} />
      }
      case 2:
        return <Step2 _handleChange={this._handleChange} _setInitialMaps={this._setInitialMaps} region={this.state.region} />
      case 3: {
        return (
          <Step3
            _handleChange={this._handleChange}
            _setDateTime={this._setDateTime}
            contact={this.state.contact}
            date={this.state.date}
            time={this.state.time}
          />
        )
      }
      case 4:
        return <Step4 _handleChange={this._handleChange} payment={this.state.payment} />
    }
  }

  render () {
    console.log(this.state)
    return (
      <View style={{ flex: 1 }}>
        <StepBar step={this.props.step} _handleChangeStep={this.props._handleChangeStep} />
        <View style={{ flex: 1 }}>
          {this._renderBody()}
        </View>
      </View>
    )
  }
}
