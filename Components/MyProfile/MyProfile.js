import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MyProfile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>This is my profile!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'yellowgreen',
  },
});
