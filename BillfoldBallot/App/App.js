import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'
import LoginScreen from './LoginScreen'
import Main from './Main'
import Styles from './Styles'


const App = StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Main: {
    screen: Main
  }
})

export default App

