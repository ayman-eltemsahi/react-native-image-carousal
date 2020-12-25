import React from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";

import Carousal from "./src/carousal/Carousal";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Carousal />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    marginTop: StatusBar.currentHeight + 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
