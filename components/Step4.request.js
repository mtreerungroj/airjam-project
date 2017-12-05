import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, TouchableHighlight } from 'react-native'
import { COLOR } from 'react-native-material-ui'

export default class Step4 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeBotton: ''
    }
  }

  onButtonPress = activeBotton => {
    this.setState({ activeBotton })
    this.props._handleChange('payment', activeBotton)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>เลือกช่องทางชำระเงิน</Text>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonUp}>
            <View style={styles.buttonUpIn}>
              <TouchableOpacity
                onPress={() => this.onButtonPress('Paypal')}
                style={this.state.activeBotton == 'Paypal' ? styles.buttonStyleClicked : styles.buttonStyle}
              >
                <Image style={styles.imageElement} source={require('../assets/payment/paypal.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.onButtonPress('Visa')}
                style={this.state.activeBotton == 'Visa' ? styles.buttonStyleClicked : styles.buttonStyle}
              >
                <Image style={styles.imageElement} source={require('../assets/payment/visa.png')} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.onButtonPress('Master Card')}
                style={this.state.activeBotton == 'Master Card' ? styles.buttonStyleClicked : styles.buttonStyle}
              >
                <Image style={styles.imageElement} source={require('../assets/payment/master-card.png')} />
              </TouchableOpacity>
            </View>

            <View style={styles.buttonUpIn}>
              <TouchableOpacity
                onPress={() => this.onButtonPress('Bitcoin')}
                style={this.state.activeBotton == 'Bitcoin' ? styles.buttonStyleClicked : styles.buttonStyle}
              >
                <Image style={styles.imageElement} source={require('../assets/payment/bitcoin.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.onButtonPress('Citibank')}
                style={this.state.activeBotton == 'Citibank' ? styles.buttonStyleClicked : styles.buttonStyle}
              >
                <Image style={styles.imageElement} source={require('../assets/payment/citibank.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.onButtonPress('American Express')}
                style={this.state.activeBotton == 'American Express' ? styles.buttonStyleClicked : styles.buttonStyle}
              >
                <Image style={styles.imageElement} source={require('../assets/payment/american-express.png')} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.buttonUp}>
              <TouchableOpacity
                onPress={() => this.onButtonPress('Cash')}
                style={this.state.activeBotton == 'Cash' ? styles.buttonStyleClicked : styles.buttonStyle}
              >
                <Image style={styles.imageElement} source={require('../assets/payment/cash.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    alignSelf: 'center',
    color: COLOR.black
  },
  imageElement: {
    width: 100,
    height: 100
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 10
  },
  buttonUp: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLOR.grey600,
    backgroundColor: COLOR.grey300
  },
  buttonUpIn: {
    flex: 1,
    flexDirection: 'row'
  },
  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyleClicked: {
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.orange500
  }
})
