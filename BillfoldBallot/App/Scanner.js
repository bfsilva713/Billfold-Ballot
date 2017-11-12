import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, AlertIOS } from 'react-native'
import Camera from 'react-native-camera'
import sha1 from 'crypto-js/hmac-sha1'
import Base64 from 'crypto-js/enc-base64'
import { fetchProductCompany, hideCamera, ProductNotFound } from './Store'


export function Scanner(props) {
  console.log('PROPS ARE', props)

    return (
      <View style={styles.container}>
        {props.showCamera &&
          (
            <Camera
              ref={(cam) => {
                this.camera = cam;
              }}
              style={styles.preview}
              aspect={Camera.constants.Aspect.stretch}
              onBarCodeRead={props.onBarCodeRead}
            />
          )
        }
      </View>
    );
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

const mapState = state => {
  return {
    showCamera: state.showCamera,

  }
}

const mapDispatch = dispatch => {
  return {
  //   getCompany(upc){
  //     dispatch(getCompany(upc))
  //   },
    onBarCodeRead(event) {
      console.log('BARCODE READ')
      try{
        dispatch(fetchProductCompany(event.data))
        dispatch(hideCamera())
      } catch(error) {
        console.error(error)
          AlertIOS.alert('That product wasn\'t found in the database.')
      }

    }
  }
}

// _onBarCodeRead(event) {
//   this.setState({ showCamera: false });
//   getCompany(event.data)
//     .then(array => {
//       AlertIOS.alert(
//         "Barcode Found!",
//         "Type: " + event.type + "\nData: " + array
//       )
//     }
//     )
// }
const ScannerContainer = connect(mapState, mapDispatch)(Scanner)

export default ScannerContainer

