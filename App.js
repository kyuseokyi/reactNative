import React from 'react';
import { AppLoading, Font, Asset } from "expo";
import { Ionicons } from "@expo/vector-icons";
//import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from "./navigation/TabNavigation";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

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
    //
    // ]);
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return <TabNavigation/>
    } else {
      return (<AppLoading
          startAsync={this.loadAssets}
          onError={this.handleError}
          onFinish={this.handleLoaded}/>
      );
    }
  }
}
