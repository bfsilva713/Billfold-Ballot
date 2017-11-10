import React from 'react'
import { NativeRouter } from 'react-router-native'
import { View, Image, Button, StyleSheet, Text } from 'react-native'
import Header from './Header'
import Footer from './Footer'
import styles from './Styles'
import Scanner from './Scanner'

const Main = () => (
  <View style={styles.main}>
    <Header />
    <View style={styles.body}>
      <Text>Scan your barcode below:</Text>
      <Scanner />
    </View>
    <Footer />
  </View>
)



export default Main
