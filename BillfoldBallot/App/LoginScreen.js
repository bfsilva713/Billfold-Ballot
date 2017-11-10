import React from 'react'
import { View, Image, Button, TextInput, Text } from 'react-native'
import styles from './Styles'
import Footer from './Footer'

const LoginScreen = ({ navigation }) => (
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
        <Button
          onPress={() => navigation.navigate('Main')}
          title='Log in'
        >
          Login
      </Button>
        <Button
          onPress={() => navigation.navigate('Main')}
          title='Sign up'
        >
          Signup
      </Button>
      </View>
      <View style={styles.loginFooter}>
        <Image
          style={{width: 150, height: 50}}
          source={{uri: 'https://s3.amazonaws.com/assets2.opensecrets.org/img/opensecrets_150x54.gif'}} />
      </View>
    </View>
  </View>
)

export default LoginScreen
