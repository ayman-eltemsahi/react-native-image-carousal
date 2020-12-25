import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

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
    marginTop: StatusBar.currentHeight + 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
