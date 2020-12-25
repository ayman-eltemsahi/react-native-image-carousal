import React from "react";
import { StyleSheet, View, FlatList, Dimensions, Animated } from "react-native";

import CarousalImage from "./CarousalImage";
import images from "./data";
import consts from "./consts";

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width * consts.WIDTH_RATIO;
const SPACER = (width - ITEM_WIDTH) / 2;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Carousal = () => {
  const animation = React.useRef(new Animated.Value(0)).current;

  return (
    <View styles={styles.container}>
      <AnimatedFlatList
        // Direction & Pagin
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        // Snapping
        snapToAlignment={"start"}
        snapToInterval={ITEM_WIDTH}
        // Scrolling
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: animation } } }],
          { useNativeDriver: true }
        )}
        // Data
        data={images}
        keyExtractor={({ id }) => id}
        renderItem={({ item, index }) => (
          <CarousalImage
            index={index}
            animation={animation}
            imageUrl={item.imageUrl}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainerStyle: {
    paddingLeft: SPACER,
    paddingRight: SPACER,
  },
});

export default Carousal;
