import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, Dimensions, Text, Button, TouchableOpacity, TextInput } from 'react-native'
import { COLOR } from 'react-native-material-ui'
import MapView from 'react-native-maps'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import AnimatedHideView from 'react-native-animated-hide-view'

export default class Step2 extends Component {
  constructor (props) {
    super(props)
    this.watchID = null
    this.state = { isVisible: false }
  }

  toggle = () => {
    this.setState({ isVisible: !this.state.isVisible })
  }

  // componentDidMount () {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       this.setState({
  //         region: {
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //           latitudeDelta: LATITUDE_DELTA,
  //           longitudeDelta: LONGITUDE_DELTA
  //         }
  //       })
  //     },
  //     error => console.log(error.message),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   )
  //   this.watchID = navigator.geolocation.watchPosition(position => {
  //     this.setState({
  //       region: {
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //         latitudeDelta: LATITUDE_DELTA,
  //         longitudeDelta: LONGITUDE_DELTA
  //       }
  //     })
  //   })
  // }

  // componentWillUnmount () {
  //   navigator.geolocation.clearWatch(this.watchID)
  // }

  onMapPress = e => {
    console.log(e.nativeEvent.coordinate.longitude)
    let region = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latitudeDelta: 0.00922 * 1.5,
      longitudeDelta: 0.00421 * 1.5
    }
    this.props._handleChange('region', region)
  }

  render () {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.text}>สถานที่จากตำแหน่งปัจจุบัน</Text>
        <MapView style={styles.mapContainer} showsUserLocation region={this.props.region} onPress={this.onMapPress}>
          <MapView.Marker coordinate={this.props.region} />
        </MapView>

        <TouchableOpacity style={styles.button} onPress={this.toggle} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>เลือกสถานที่เอง</Text>
        </TouchableOpacity>

        <AnimatedHideView visible={this.state.isVisible}>
          <TextInput
            style={styles.textInput}
            onChangeText={address => this.props._handleChange('address', address)}
            placeholder={'สถานที่ที่ต้องการรับบริการ'}
          />
        </AnimatedHideView>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  viewContainer: {
    margin: 10
  },
  mapContainer: {
    height: '60%',
    width: '95%',
    alignSelf: 'center'
  },
  text: {
    marginBottom: 10,
    marginTop: 10,
    color: COLOR.black,
    fontSize: 18,
    alignSelf: 'center'
  },
  textInput: {
    height: 40,
    borderColor: COLOR.grey500,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10
  },
  buttonText: {
    fontSize: 18,
    color: COLOR.white,
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: COLOR.cyan500,
    borderColor: COLOR.cyan700,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})
