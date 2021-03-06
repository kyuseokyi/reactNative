import React, { Component } from 'react';
import { AppLoading } from "expo";
import * as Font from 'expo-font';
import { Ionicons } from "@expo/vector-icons";
//import TabNavigation from "./navigation/TabNavigation";
import MainNavigation from "./navigation/MainNavigation";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = () => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async() => {
    await Font.loadAsync({
      ...Ionicons.font
    });
    // await Asset.loadAsync([
    //   require("images/icon.png")
    // ]);
  };
Ó
  render() {
    const { loaded } = this.state;
    if (loaded) {
      //return <TabNavigation/>
      return <MainNavigation/>
    } else {
      return (
          <AppLoading
            startAsync={ this.loadAssets }
            onError={ this.handleError }
            onFinish={ this.handleLoaded }
          />
      );
    }
  }
}
