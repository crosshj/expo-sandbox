// App.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.games}>Dead By Daylight</Text>
      <Text style={styles.games}>Left 4 Dead 2</Text>
      <Text style={styles.games}>The Sims 4</Text>
      <Text style={styles.games}>Hunt Showdown</Text>
      <Text style={styles.games}>Rainbow Six Siege</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  games: {
    flex: 1,
    margin: 10,
    backgroundColor: 'pink',
    textAlign: 'center',
    fontSize: 30,
    color: '#000000',
    paddingTop: 20,
    paddingBottom: 20,
  }
});