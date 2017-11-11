import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, AlertIOS } from 'react-native'
import Camera from 'react-native-camera'
import sha1 from 'crypto-js/hmac-sha1'
import Base64 from 'crypto-js/enc-base64'
import getCompany from './Store'




class Scanner extends Component {
  constructor() {
    super()
    this._onBarCodeRead = this._onBarCodeRead.bind(this)
    this.state = {
      showCamera: true
    }
  }


  _onBarCodeRead(event) {
    this.setState({ showCamera: false });
    getCompany(event.data)
      .then(array => {
        AlertIOS.alert(
          "Barcode Found!",
          "Type: " + event.type + "\nData: " + array
        )
      }
      )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.showCamera &&
          (
            <Camera
              ref={(cam) => {
                this.camera = cam;
              }}
              style={styles.preview}
              aspect={Camera.constants.Aspect.stretch}
              onBarCodeRead={this._onBarCodeRead}
            />
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: 300,
    height: 200
  },
  preview: {
    flex: 1,
    // justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default Scanner
