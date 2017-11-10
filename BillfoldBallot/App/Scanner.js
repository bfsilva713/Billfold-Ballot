import React, { Component } from 'react'
// import sha1 from 'sha1'
import { View, StyleSheet, AlertIOS } from 'react-native'
import Camera from 'react-native-camera'


class Scanner extends Component {
  constructor() {
    super()
    this._onBarCodeRead = this._onBarCodeRead.bind(this)
    this.state = {
      showCamera: true
    }
  }


  _onBarCodeRead(event) {
    this.setState({showCamera: false});
    AlertIOS.alert(
        "Barcode Found!",
        "Type: " + event.type + "\nData: " + event.data
    );
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
