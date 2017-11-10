import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  headerView: {
    flex: 1,
    // justifyContent: 'center',
    // padding: 10
    // fontSize:
  },
  loginForm: {
    flex: 2,
    width: 300
  },
  formText: {
    color: 'blue'
  },
  formInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  loginButton: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footer: {
    flex: 1,
    width: 310,
    height: 200,
    paddingTop: 120,
    paddingRight: 10,
    position: 'absolute',
    bottom: 40

  },
  footerText: {
    fontSize: 12,
    paddingTop: 10,
  },
  header: {
    position: 'absolute',
    top: -70
  }
});

export default styles
