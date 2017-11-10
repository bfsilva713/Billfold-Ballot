import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'
import LoginScreen from './App/LoginScreen'
import Main from './App/Main'
import Styles from './App/Styles'


const App = StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Main: {
    screen: Main
  }
})

export default App

