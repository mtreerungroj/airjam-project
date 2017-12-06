import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, Dimensions, Text, Button, TouchableOpacity, TextInput } from 'react-native'
import { COLOR } from 'react-native-material-ui'
import MapView from 'react-native-maps'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import AnimatedHideView from 'react-native-animated-hide-view'

let { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE = 7.0130963
const LONGITUDE = 100.502331
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class Step2 extends Component {
  constructor (props) {
    super(props)
    this.watchID = null
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      marker: {
        latitude: LATITUDE,
        longitude: LONGITUDE
      },
      isVisible: false,
      text: 'สถานที่ที่ต้องการรับบริการ'
    }
  }

  toggle = () => {
    console.log('start')
    this.setState({
      isVisible: !this.state.isVisible
    })
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
    // this.onRegionChange(region, region.latitude, region.longitude);
    this.setState({ region })
  }

  render () {
    return (
      <View style={styles.viewContainer}>
        <Text style={styles.text}>สถานที่จากตำแหน่งปัจจุบัน</Text>
        <MapView
          // provider={PROVIDER_GOOGLE}
          style={styles.mapContainer}
          showsUserLocation
          region={this.state.region}
          onPress={this.onMapPress}
          // onRegionChange={region => this.setState({ region })}
          // onRegionChangeComplete={region => this.setState({ region })}
        >

          <MapView.Marker coordinate={this.state.region} />
        </MapView>

        <TouchableOpacity style={styles.button} onPress={this.toggle} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>เลือกสถานที่เอง</Text>
        </TouchableOpacity>

        <AnimatedHideView visible={this.state.isVisible}>
          <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => this.setState({ text })} placeholder={this.state.text} />
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
    fontSize: 18
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})
