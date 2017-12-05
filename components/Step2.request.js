import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, Dimensions, Text, Button, TouchableOpacity, TextInput } from 'react-native'
import MapView from 'react-native-maps'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
// import AnimatedHideView from 'react-native-animated-hide-view';

let { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE = 0
const LONGITUDE = 0
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
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    console.log('start')
    this.setState({
      isVisible: !this.state.visible
    })
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }
        })
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
    this.watchID = navigator.geolocation.watchPosition(position => {
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }
      })
    })
  }
  componentWillUnmount () {
    navigator.geolocation.clearWatch(this.watchID)
  }
  render () {
    return (
      <View>
        <Text style={styles.head}>สถานที่จากตำแหน่งปัจจุบัน</Text>
        <MapView
          // provider={PROVIDER_GOOGLE}
          style={styles.container}
          showsUserLocation
          Region={this.state.region}
          onRegionChange={region => this.setState({ region })}
          onRegionChangeComplete={region => this.setState({ region })}
        >

          <MapView.Marker coordinate={this.state.region} />
        </MapView>

        <TouchableOpacity style={styles.button} onPress={this.toggle} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>เลือกสถานที่เอง</Text>
        </TouchableOpacity>

        {/* <AnimatedHideView visible={this.state.isVisible}>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
        </AnimatedHideView> */}

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    height: '60%',
    width: '95%',
    alignSelf: 'center'
  },
  head: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center'
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
