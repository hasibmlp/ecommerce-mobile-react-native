import React from "react";
import styled from "styled-components";
import { Text, Button, View, StatusBar } from "react-native";

import VerticalCarousal from "../components/VerticalCarousal";

export default function ProductDetailPage({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
        <StatusBar hidden />
      <VerticalCarousal />
      <Button onPress={() => navigation.goBack()} title={"close"} />
    </View>
  );
}
