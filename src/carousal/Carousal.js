import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text, Dimensions, Animated } from "react-native";

import colors from "./colors";
import images from "./data";

const { width, height } = Dimensions.get("screen");
const SIZE_RATIO = 0.75;
const ITEM_WIDTH = width * SIZE_RATIO;
const SPACER = width * ((1 - SIZE_RATIO) / 2);

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Product = ({ index, animation, imageUrl }) => {
  const translateY = animation.interpolate({
    inputRange: [(index - 2) * ITEM_WIDTH, (index - 1) * ITEM_WIDTH, index * ITEM_WIDTH],
    outputRange: [120, 30, 120],
    extrapolate: "clamp",
  });

  const opacity = animation.interpolate({
    inputRange: [(index - 2) * ITEM_WIDTH, (index - 1) * ITEM_WIDTH, index * ITEM_WIDTH],
    outputRange: [0.7, 1, 0.7],
    extrapolate: "clamp",
  });

  const scale = animation.interpolate({
    inputRange: [(index - 2) * ITEM_WIDTH, (index - 1) * ITEM_WIDTH, index * ITEM_WIDTH],
    outputRange: [0.9, 1, 0.9],
    extrapolate: "clamp",
  });

  const imageTranslateX = animation.interpolate({
    inputRange: [(index - 2) * ITEM_WIDTH, (index - 1) * ITEM_WIDTH, index * ITEM_WIDTH],
    outputRange: [-200, 0, 200],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        styles.container,
        //{ transform: [{ translateY }, { scale }] }
      ]}
    >
      <Text>{imageUrl}</Text>
      <Text>{index}</Text>
      <View style={styles.imageContainer}>
        <Animated.Image
          style={[
            styles.image,
            { opacity },
            // { transform: [{ translateX: imageTranslateX }] },
          ]}
          source={{ uri: imageUrl }}
          resizeMode={"cover"}
        ></Animated.Image>
      </View>
    </Animated.View>
  );
};

const DummySpacing = ({ type }) => (
  <View style={type === "before" ? { marginLeft: SPACER } : { marginRight: SPACER }}></View>
);

class Carousal extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      animation: new Animated.Value(0),
    };
  }

  _onViewableItemsChangedCallback = ({ viewableItems }) => {
    const i = Math.floor(viewableItems.length / 2);
    this.setState({ selectedIndex: viewableItems[i].index });
  };

  _viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  render() {
    return (
      <View styles={styles.outerContainer}>
        <AnimatedFlatList
          scrollEventThrottle={16}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.state.animation } } }], {
            useNativeDriver: true,
          })}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={[{ id: "before" }, ...images, { id: "after" }]}
          snapToAlignment={"start"}
          snapToInterval={ITEM_WIDTH}
          onViewableItemsChanged={this._onViewableItemsChangedCallback}
          viewabilityConfig={this._viewabilityConfig}
          renderItem={({ item, index }) => {
            if (item.id === "before") return <DummySpacing type={"before"} />;
            if (item.id === "after") return <DummySpacing type={"after"} />;

            return <Product index={index} animation={this.state.animation} imageUrl={item.imageUrl} />;
          }}
          keyExtractor={({ id }) => id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: colors.primary,
    borderColor: "#ccc",
    borderWidth: 1,
    alignItems: "center",
    width: ITEM_WIDTH,
    height: height * 0.8,
  },
  title: {
    color: colors.secondary,
    fontSize: 30,
    fontWeight: "900",
    marginBottom: 20,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "800",
  },
  imageContainer: {
    width: width * SIZE_RATIO,
    height: (width * SIZE_RATIO * 4) / 3,
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    width: width * SIZE_RATIO,
    height: height * 0.8,
    // height: undefined,
    aspectRatio: 3 / 4,
    borderRadius: 10,
  },
});

export default Carousal;
