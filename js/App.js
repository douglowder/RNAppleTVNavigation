/*
 * @flow
 */
import React, { Component } from 'react';

import {
  Platform,
  ScrollView,
  TabBarIOS,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import Slide from './Slide';

//import VictoryDemo from './VictoryDemo';

import ListViewDemo from './ListViewDemo';

import Icon from './Icon';

import CustomEventDemo from './CustomEventDemo';

import TextInputDemo from './TextInputDemo';

import TVUIKit from 'react-native-tvuikit';

const TVPosterView = TVUIKit.TVPosterView;
const TVCardView = TVUIKit.TVCardView;


const styles = require('./styles').default;

class App extends Component {
  state: {
    selectedTab: string
  };

  componentDidMount() {
    this.setState({
      selectedTab: 'tvUiKitDemo'
    });
  }

  updateTab(newTab: string) {
    if (this.state.selectedTab !== newTab) {
      this.setState({
        selectedTab: newTab
      });
    }
  }

  render() {
    let platform_string_1 = 'Platform.isTVOS = ' + Platform.isTVOS;
    let platform_string_2 = 'Platform.Version = ' + Platform.Version;
    let posterviewnames = ['like', 'dislike', 'call', 'flowers', 'party'];
    let posterviews = posterviewnames.map(n => (
      <TVPosterView
        style={{ height: 400, width: 300, margin: 20}}
        title='TVPosterView'
        subtitle={n}
        key={n}
        imageURL={n}
      />
    ));
    let cardviews = posterviewnames.map(n => (
      <TVCardView
        style={{ height: 400, width: 300, margin: 20}}
        title='TVCardView'
        subtitle={n}
        key={n}
        imageURL={n}
      />
    ));
 
    return (
      <TabBarIOS
        unselectedTintColor="white"
        tintColor="red"
        barTintColor="#00a1e0"
      >
        <TabBarIOS.Item
          title="Main"
          selected={this.state && this.state.selectedTab === 'main'}
          onPress={() => this.updateTab('main')}
        >
          <Slide title="React Native on tvOS 12">
            <Text style={styles.body}>{platform_string_1}</Text>
            <Text style={styles.body}>{platform_string_2}</Text>
          </Slide>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="TVUIKit demo"
          selected={this.state && this.state.selectedTab === 'tvUiKitDemo'}
          onPress={() => this.updateTab('tvUiKitDemo')}
        >
          <Slide title="TVUIKitDemo">
            <View style={{flexDirection: 'row'}}>
              {posterviews}
            </View>
            <View style={{flexDirection: 'row'}}>
              {cardviews}
            </View>
          </Slide>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Text input demo"
          selected={this.state && this.state.selectedTab === 'textInputDemo'}
          onPress={() => this.updateTab('textInputDemo')}
        >
          <Slide title="Text input example">
            <TextInputDemo />
          </Slide>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="ListView demo"
          selected={this.state && this.state.selectedTab === 'listViewDemo'}
          onPress={() => this.updateTab('listViewDemo')}
        >
          <ListViewDemo />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="TV remote demo"
          selected={this.state && this.state.selectedTab === 'tvRemoteDemo'}
          onPress={() => this.updateTab('tvRemoteDemo')}
        >
          <Slide title="Siri remote custom events">
            <View style={styles.listViewDemoContainer}>
              <TouchableOpacity>
                <Text style={styles.body}>Custom event demo</Text>
              </TouchableOpacity>
              <CustomEventDemo />
            </View>
          </Slide>
        </TabBarIOS.Item>
        {/*
        <TabBarIOS.Item
          title="Data viz demo"
          selected={this.state && this.state.selectedTab === 'dataVizDemo'}
          onPress={() => this.updateTab('dataVizDemo')}
        >
          <Slide title="victory-native demo app">
            <VictoryDemo />
          </Slide>
        </TabBarIOS.Item>
           */}
      </TabBarIOS>
    );
  }
}

module.exports = App;
