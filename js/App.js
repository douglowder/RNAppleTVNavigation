/*
 * @flow
 */
import React, { Component } from 'react';

import {
  ScrollView,
  TabBarIOS,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import Slide from './Slide';

import VictoryDemo from './VictoryDemo';

import ListViewDemo from './ListViewDemo';

import Icon from './Icon';

import CustomEventDemo from './CustomEventDemo';

import TextInputDemo from './TextInputDemo';

const styles = require('./styles').default;

class App extends Component {
  state: {
    selectedTab: string
  };

  componentDidMount() {
    this.setState({
      selectedTab: 'main'
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
          <Slide title="React Native on tvOS 12" >
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
        <TabBarIOS.Item
          title="Data viz demo"
          selected={this.state && this.state.selectedTab === 'dataVizDemo'}
          onPress={() => this.updateTab('dataVizDemo')}
        >
          <Slide title="victory-native demo app">
            <VictoryDemo />
          </Slide>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

module.exports = App;
