import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TabBarIcon extends Component{
  constructor(props){
    super(props);
    this.data={
      tabBooks:{
        title:'Books',
        icon:'book',
      },
      tabMe:{
        title:'Me',
        icon:'user',
      }
    }
  }
  render(){
    let param=this.data[this.props.sceneKey];
    let activeStyle=this.props.selected?{color:'yellowgreen'}:{color:'silver'};
    return (
      <View style={styles.tabbar}>
        <Icon name={param.icon} color={activeStyle.color} size={25}/>
        <Text style={activeStyle}>{param.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    tabbar:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: 'white'
    }
})
