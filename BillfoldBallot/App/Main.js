import React from 'react'
import { View, Image, Button, StyleSheet, Text } from 'react-native'
import Header from './Header'
import Footer from './Footer'
import styles from './Styles'

const Main = () => (
  <View style={styles.main}>
    <Header />

      <Text>Welcome to the Home Screen</Text>

    <Footer />
  </View>
)

export default Main
