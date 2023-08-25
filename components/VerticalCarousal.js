import React from "react";
import { Dimensions, FlatList, Text, Animated, StyleSheet } from "react-native";
import styled from "styled-components";

const { width, height } = Dimensions.get("screen");

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.75;

const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;

const images = [
  require("../assets/prod.jpg"),
  require("../assets/prod2.jpg"),
  require("../assets/prod3.jpg"),
];

export default function VerticalCarousal() {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  function calculateScrollY() {
    return;
  }

  return (
    <Container>
      <Animated.FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate={"fast"}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => {
          return <Image source={item} />;
        }}
      />
      <Pagination>
        {images.map((_, index) => {
          return <Dot />;
        })}
        <Animated.View
          style={[
            styles.DotIndicator,
            {
              transform: [
                {
                  translateY: Animated.divide(scrollY, ITEM_HEIGHT).interpolate(
                    {
                      inputRange: [0, 1],
                      outputRange: [0, DOT_INDICATOR_SIZE],
                    }
                  ),
                },
              ],
            },
          ]}
        />
      </Pagination>
    </Container>
  );
}

const styles = StyleSheet.create({
  DotIndicator: {
    width: DOT_INDICATOR_SIZE,
    height: DOT_INDICATOR_SIZE,
    borderRadius: DOT_INDICATOR_SIZE,
    borderWidth: 1,
    borderColor: '#333',
    position: 'absolute',
    top: -DOT_SIZE / 2,
    left: -DOT_SIZE / 2,
  },
});

const Container = styled.View`
  height: ${ITEM_HEIGHT};
  overflow: hidden;
  position: relative;
`;

const Image = styled.Image`
  width: ${ITEM_WIDTH};
  height: ${ITEM_HEIGHT};
`;
const Pagination = styled.View`
  position: absolute;
  top: ${ITEM_HEIGHT / 2};
  left: 20px;
`;
const Dot = styled.View`
  width: ${DOT_SIZE}px;
  height: ${DOT_SIZE}px;
  border-radius: ${DOT_SIZE}px;
  background-color: #333;
  margin-bottom: ${DOT_SPACING}px;
`;
const DotIndicator = styled.View`
  width: ${DOT_INDICATOR_SIZE}px;
  height: ${DOT_INDICATOR_SIZE}px;
  border-radius: ${DOT_INDICATOR_SIZE}px;
  border: 1px solid #333;
  position: absolute;
  top: ${-DOT_SIZE / 2};
  left: ${-DOT_SIZE / 2};
`;
