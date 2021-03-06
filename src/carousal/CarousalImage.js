import React from "react";
import { StyleSheet, View, Dimensions, Animated } from "react-native";

import consts from "./consts";

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width * consts.WIDTH_RATIO;

const CarousalImage = ({ index, animation, imageUrl }) => {
  const inputRange = [
    (index - 1) * ITEM_WIDTH,
    index * ITEM_WIDTH,
    (index + 1) * ITEM_WIDTH,
  ];

  const rotateY = animation.interpolate({
    inputRange,
    outputRange: ["30deg", "0deg", "-30deg"],
  });

  const translateX = animation.interpolate({
    inputRange,
    outputRange: [-150, 0, 150],
  });

  const scale = animation.interpolate({
    inputRange,
    outputRange: [1, 1.07, 1],
  });

  return (
    <View style={[styles.container]}>
      <Animated.View
        style={[styles.imageContainer, { transform: [{ rotateY }, { scale }] }]}
      >
        <Animated.Image
          style={[styles.image, { transform: [{ translateX }] }]}
          source={{ uri: imageUrl }}
          resizeMode={"cover"}
        ></Animated.Image>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: ITEM_WIDTH,
    height: height * consts.HEIGHT_RATIO,
    overflow: "hidden",
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 10,
    margin: 20,
    borderRadius: 10,
  },
  image: {
    width: ITEM_WIDTH - 20,
    height: "100%",
  },
});

export default CarousalImage;
