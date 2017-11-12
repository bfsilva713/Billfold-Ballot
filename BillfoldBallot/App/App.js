import React from 'react';
// import { StyleSheet, Text, View, Image, Button } from 'react-native';
import LoginScreen from './LoginScreen'
import MainScreen from './MainScreen'
import { Provider } from 'react-redux'
import { NativeRouter, Switch, Route } from 'react-router-native'
import store from './Store'


class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Switch>
            <Route path='/main' component={MainScreen} />
            <Route exact path='/' component={LoginScreen} />
          </Switch>
        </NativeRouter>
      </Provider>
    )
  }
}

export default App
