import React from 'react'
import { Provider } from 'react-redux'
import { NativeRouter } from 'react-router-native'
import { View, Button, Text, TextInput, ScrollView } from 'react-native'
import Header from './Header'
import Footer from './Footer'
import styles from './Styles'
import Scanner from './Scanner'
import store from './Store'

function MainScreen() {
  console.log('INSIDE MAINSCREEN')
  return (
    // <Provider store={store}>
      <ScrollView contentContainerStyle={styles.main}>
        <Header />
        <View style={styles.body}>
          <Text>Scan your barcode below:</Text>
          <Scanner />
          <Text>Or, search a company by name:</Text>
          <TextInput style={styles.formInput} />
          <Button title='Search' onPress={() => { }} />
        </View>
        <Footer />
      </ScrollView>
    // </Provider>
  )
}


export default MainScreen
