import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Billfold Ballot</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  headerView: {
    flex: 0.2,
    justifyContent: 'center',
    padding: 10
    // fontSize:
  },
  headerText: {
    fontSize: 30,
    color: 'red'
  }
});
