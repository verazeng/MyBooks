import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabBarIcon from './TabBarIcon';
import Books from './Books/Books';
import BookDetail from './Books/BookDetail';
import MyProfile from './MyProfile/MyProfile';

export default class App extends Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBarStyle} titleStyle={styles.navTitleStyle}>
        <Scene key="root">
          <Scene key="myBooksTabBar" tabs={true}
                 tabBarStyle={styles.tabbarContainer} >
            <Scene key="tabBooks" title="Books" icon={TabBarIcon}>
                <Scene key="books" title='Books'
                       component={Books}
                       renderRightButton={()=> <Icon name={'search'} color={'white'} size={20}/>}/>
                <Scene key="bookDetail"component={BookDetail} title="Book Detail"/>
            </Scene>
            <Scene key="tabMe" title="MyProfile" icon={TabBarIcon}>
                <Scene key="me" title='Me' component={MyProfile}/>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  tabbarContainer:{
    borderTopWidth:1,
    borderTopColor:'lightgray',
    backgroundColor:'white',
  },
  navBarStyle:{
    backgroundColor:'yellowgreen',
  },
  navTitleStyle:{
    color:'white'
  }
});
