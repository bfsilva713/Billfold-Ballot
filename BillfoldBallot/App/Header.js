import React from 'react'
import { View, Image } from 'react-native'
import styles from './Styles'

const Header = () => (
  <View style={styles.header}>
    <Image source={require('../Logo.png')} />
  </View>
)

export default Header
