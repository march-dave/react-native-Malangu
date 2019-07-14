/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

// import React, {Component} from 'react';
import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, Image, TouchableOpacity, FlatList, View } from 'react-native';
import data from './data.json';
import Icon from 'react-native-vector-icons/MaterialIcons'
import VideoItem from './components/videoItem'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface Props { }
export default class App extends Component<Props> {
  render() {
    return (
      // 전체 컨테이너를 설정 하고
      // flex: 1로 크기를 전체 다 사용 하겠다고 Layout 정한다.
      <View style={styles.container}>

        {/* 위에 로고와 검색 버튼 Layout은 View 높이만 설정 한다 */}
        {/* 여기서는 유트브 로고와 검색 버튼을 양쪽으로 갈라 놓는다. */}
        {/* 이것을 써서 justifyContent: 'space-between'  */}
        <View style={styles.navBar}>
          <Image source={require('./images/logo.png')} style={{ width: 98, height: 22 }} />
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="search" size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="account-circle" size={25} />
            </TouchableOpacity>
          </View>
        </View>

        {/* 바디는 flex: 1 전체 크기를 사용 하겠다고 정의 하는데 어차피 위쪽에서는 검색 View의 높이가 결정 되어 있고 아래쪽 tabBar도 크기가 결정 되어 있다. 그래서 flex: 1 전체 크기를 사용해도 된다 */}
        <View style={styles.body}>
          <FlatList
            data={data.items}
            renderItem={(video) => <VideoItem video={video.item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#E5E5E5' }} />}
          />
        </View>


        {/* 여기서는 4개의 로고 홈, 트렌딩, 구독, 라이브러리 갈라 놓는다 */}
        {/* 각 아이콘 홈 버튼, 트렌팅, 구독, 폴도 이미지들은 MaterialIcons 백터이미지에 저장이 되어 있고 Icon name="home" 으로 선택 되어 진다. */}
        {/* 이것을 써서 justifyContent: 'space-around' */}
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size={25} />
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="whatshot" size={25} />
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="subscriptions" size={25} />
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="folder" size={25} />
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    height: 55,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between' 
  },
  rightNav: {
    flexDirection: 'row'
  },
  navItem: {
    marginLeft: 25
  },
  body: {
    flex: 1
  },
  tabBar: {
    backgroundColor: 'white',
    height: 60,
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabTitle: {
    fontSize: 11,
    color: '#3c3c3c',
    paddingTop: 4
  }
});