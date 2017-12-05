import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import StepBar from './StepBar'
import Step1 from './Step1.request'
import Step1Problem from './Step1Problem.request'
import Step2 from './Step2.request'
import Step3 from './Step3.request'
import Step4 from './Step4.request'
import { getCurrentDate } from '../config/helper'

export default class RequestJob extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {}

  _setDateTime = () => {
    this.setState(getCurrentDate())
  }

  _handleChange = (name, value) => {
    this.setState({ [name]: value })
    console.log(this.state)
  }

  _renderBody = () => {
    switch (this.props.step) {
      case 1: {
        if (this.props.service == 'problem') return <Step1Problem _handleChange={this._handleChange} />
        else return <Step1 _handleChange={this._handleChange} />
      }
      case 2:
        return <Step2 _handleChange={this._handleChange} />
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
