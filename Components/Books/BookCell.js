import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class BookCell extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
        <View style={styles.container}>
          <Image source={{uri:this.props.book.image}} style={styles.coverImage}/>
          <View style={styles.rightContent}>
            <Text>{this.props.book.title}</Text>
            <Text style={styles.author}>{this.props.book.author[0]}</Text>
            <Text numberOfLines={3} style={styles.summary}>{this.props.book.summary}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10
  },
  coverImage: {
    height:60,
    width:40,
  },
  rightContent: {
    flex: 1,
    paddingHorizontal:10
  },
  author: {
    fontSize: 12,
    color: 'darkgray'
  },
  summary:{
    fontSize: 12,
    color: 'darkgray',
    paddingTop:10,
  }
});
