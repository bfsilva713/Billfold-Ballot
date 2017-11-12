import React from 'react'
import { Link } from 'react-router-native'
import { View, Image, Button, TextInput, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import styles from './Styles'
import Footer from './Footer'
import MainScreen from './MainScreen'


const LoginScreen = () => (
  <View style={styles.container}>
    <View style={styles.headerView}>
      <Image source={require('../Logo.png')} />
    </View>
    <View style={styles.loginForm}>
      <Text style={styles.formText}> E-mail </Text>
      <TextInput style={styles.formInput} />
      <Text style={styles.formText}> Password </Text>
      <TextInput style={styles.formInput} />
      <View style={styles.loginButton}>
        <Link to='/main'><Text>Login</Text></Link>
        <Link to='/main'><Text>Signup</Text></Link>
      </View>
      <View style={styles.loginFooter}>
        <Image
          style={{width: 150, height: 50}}
          source={{uri: 'https://s3.amazonaws.com/assets2.opensecrets.org/img/opensecrets_150x54.gif'}} />
      </View>
    </View>
  </View>
)

// const nav = StackNavigator({
//   Login: {
//     screen: LoginScreen
//   },
//   Main: {
//     screen: Main
//   }
// })

export default LoginScreen
