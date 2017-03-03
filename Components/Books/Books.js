import React, { Component } from 'react';
import { View, ListView, Text, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { getBooksFromApiAsync } from '../Data/ApiRequests';
import { Actions } from 'react-native-router-flux';
import BookCell from './BookCell';

let {width, height} = Dimensions.get('window')
export default class Books extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { dataSource: ds, loading: true};
  }

  componentWillMount() {
    getBooksFromApiAsync('react', (books)=>{
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows([...books]),
        loading: false
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? this._renderLoading() : this._renderBookList(this.state.dataSource)}
      </View>
    );
  }

  _renderLoading() {
    return <ActivityIndicator
      style={styles.centering}
      size='large'
      color='yellowgreen'
    />
  }

  _renderBookList(dataSource) {
    return <ListView
      dataSource={dataSource}
      renderRow={this._renderRow}
      renderSeparator={this._renderSeparator}
    />
  }

  _renderRow(book, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
    return <BookCell book={book} onSelect={() => {
      highlightRow(null);
      Actions.bookDetail({book});
    }}/>
  }

  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return <View key={`{sectionID}-${rowID}`} style={styles.cellSeparator}/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 64
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'yellowgreen',
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    height: 80
  },
  cellSeparator: {
    height: 0.5,
    backgroundColor: 'lightgray'
  }
});
