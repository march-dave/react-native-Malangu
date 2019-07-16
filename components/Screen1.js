import React, { Component } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions
} from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
export default class Screen1 extends Component {
  static navigationOptions = {
    title: "Screen 1"
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 2,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Screen2")}
        >
          <Image
            source={require("../assets/button1.png")}
            style={{ width: WIDTH - 20, height: 90 }}
            resizeMode="stretch"
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
