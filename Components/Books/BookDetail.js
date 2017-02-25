import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BookCell from './BookCell';

export default class BookDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BookCell book={this.props.book}/>
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
