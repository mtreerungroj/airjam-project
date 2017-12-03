import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { COLOR } from 'react-native-material-ui'
import { BottomNavigation } from 'react-native-material-ui'
import { Button } from 'react-native-material-ui'

const activeList = ['service', 'joblist']

export default class Footer extends Component {
  constructor (props) {
    super(props)
  }

  _handleChangeStep = () => {
    if (this.props.step == 4) this.props._handleChangeStep(0)
    else this.props._handleChangeStep(this.props.step + 1)
  }

  render () {
    return activeList.includes(this.props.active)
      ? <BottomNavigation active={this.props.active} hidden={false}>
        <BottomNavigation.Action key='service' icon='today' label='Service' onPress={() => this.props._handleChangePage('AirJam', 'service')} />
        <BottomNavigation.Action
          key='joblist'
          icon='format-list-bulleted'
          label='Job List'
          onPress={() => this.props._handleChangePage('Job List', 'joblist')}
          />
        <BottomNavigation.Action key='setting' icon='settings' label='Setting' />
      </BottomNavigation>
      : <Button primary text={this.props.step == 4 ? 'Finish' : 'Next'} onPress={this._handleChangeStep} style={styles.nextButton} />
  }
}

const styles = {
  nextButton: {
    container: {
      height: '100%',
      backgroundColor: COLOR.orange500
    },
    text: {
      color: COLOR.white
    }
  }
}
