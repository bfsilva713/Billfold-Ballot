import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  headerView: {
    flex: 1
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
    position: 'relative',
    top: -70,
    flex: 1
  },
  body: {
    flex: 4
  }
});

export default styles
