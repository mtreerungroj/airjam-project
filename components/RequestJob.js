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
const services = { installation: 'ติดตั้งแอร์', cleaning: 'ล้างแอร์', moving: 'ย้ายแอร์', checking: 'ตรวจเช็คสภาพ', problem: 'ปัญหาอื่นๆ' }

export const addNewJobToDatabase = () => {
  return new Promise((resolve, reject) => {
    dataStore.createAt = new Date()
    postJobItem(dataStore)
      .then(res => {
        ToastAndroid.show(res, ToastAndroid.SHORT)
        resolve({ title: 'Job List', active: 'joblist', isShowLoading: false })
      })
      .catch(res => {
        ToastAndroid.show(res, ToastAndroid.SHORT)
        resolve({ title: 'AirJam', active: 'airjam', isShowLoading: false })
      })
  })
}

export default class RequestJob extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    this._getSirviceTitle()
    this._setInitialMaps()
    this._setInitialValue()
  }

  _getSirviceTitle = () => {
    const service = this.props.service
    for (const s in services) {
      if (service == s) {
        this.setState({ service: services[s] })
        dataStore.service = services[s]
      }
    }
  }

  _setInitialValue = () => {
    const place = 'บ้านเดี่ยว'
    const problems = {
      problem1: false,
      problem2: false,
      problem3: false,
      problem4: false,
      problem5: false,
      problem6: false
    }
    this.setState({ place, problems, isLoading: false, quantity: 1 })
    dataStore.place = place
    dataStore.problems = problems
    dataStore.quantity = 1
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
    this.setState({ [name]: value })
    dataStore[name] = value
  }

  _renderBody = () => {
    switch (this.props.step) {
      case 1: {
        if (this.props.service == 'problem') return <Step1Problem _handleChange={this._handleChange} place={this.state.place} problems={this.state.problems} />
        else return <Step1 _handleChange={this._handleChange} place={this.state.place} quantity={this.state.quantity} />
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
    return (
      <View style={{ flex: 1 }}>
        <StepBar step={this.props.step} _handleChangeStep={this.props._handleChangeStep} />
        <View style={{ flex: 1 }}>
          {this.state.isLoading ? <Text>Loading</Text> : this._renderBody()}
        </View>
      </View>
    )
  }
}
