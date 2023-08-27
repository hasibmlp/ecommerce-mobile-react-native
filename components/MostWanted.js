import styled from "styled-components";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const itemWidth = Math.floor(screenWidth / 3);
console.log(itemWidth);

export default function MostWanted() {
  return (
    <Container>
        <Title>Most Wanted</Title>
        <Cover>
            <Image source={require("../assets/wanted.avif")} />
        </Cover>
        <Content>
            <Text>Dive into a world of miniature must-have for girls, boy and baby</Text>
            <ShopNow>Shop Now</ShopNow>
        </Content>
    </Container>
  );
}

const Container = styled.View`
  width: ${screenWidth};
  margin: 5px 0;
  padding: 15px;
  background-color: white;
`;

const Cover = styled.View`
    width: 100%;
    height: 200px;
`

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: black;
  padding-bottom: 15px;
`;

const Content = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
  row-gap: 15px;
  padding-top: 15px;
`;

const Text = styled.Text`
  font-size: 12px;
  font-weight: 300;
  color: black;
`;

const ShopNow = styled.Text`
  font-size: 11px;
  font-weight: 300;
  color: #8b0000;
  text-transform: uppercase;
`;

