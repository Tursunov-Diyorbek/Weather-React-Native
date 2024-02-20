import React from "react";
import { StyleSheet, Text } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

export default function Loading() {
  return (
    <AnimatedLoader
      visible={true}
      overlayColor="#FDF6AA"
      source={require("../assets/loading.json")}
      animationStyle={styles.lottie}
      speed={1}
    >
      {/* <Text>Loading</Text> */}
    </AnimatedLoader>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 300,
    height: 300,
  },
});
