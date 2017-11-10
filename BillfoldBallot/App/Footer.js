import React from 'react'
import { Text, Image, View } from 'react-native'
import styles from './Styles'

const Footer = () => (
  <View style={styles.footer}>
    <Image
      style={{width: 150, height: 50}}
      source={{uri: 'https://s3.amazonaws.com/assets2.opensecrets.org/img/opensecrets_databy150x54.gif'}} />
  </View>
)


export default Footer

//<Text style={styles.footerText}>All data taken from the Center for Responsive Politics at OpenSecrets.org. Not to be reused for commercial purposes. </Text>
