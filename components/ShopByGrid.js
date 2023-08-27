import styled from "styled-components";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const itemWidth = Math.floor(screenWidth / 3);
console.log(itemWidth);

export default function ShopByGrid() {
  return (
    <Container>
      <Cover>
        <Image source={require("../assets/girl.jpg")} />
        <Wrapper>
            <TransparentBackground source={require("../assets/transBlack.png")} />
          <Title>Shop Girl</Title>
        </Wrapper>
      </Cover>
      <Cover>
        <Image source={require("../assets/baby.jpg")} />
        <Wrapper>
            <TransparentBackground source={require("../assets/transBlack.png")} />
          <Title>Shop Baby</Title>
        </Wrapper>
      </Cover>
      <Cover>
        <Image source={require("../assets/boys.jpg")} />
        <Wrapper>
            <TransparentBackground source={require("../assets/transBlack.png")} />
          <Title>Shop Boy</Title>
        </Wrapper>
      </Cover>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  gap: 2px;
  width: ${itemWidth};
  padding: 5px 0;
`;
const Cover = styled.View`
  width: 100%;
  height: 200px;
  overflow: hidden;
  align-items: center;
  justify-content: flex-end;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
`;

const Wrapper = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const TransparentBackground = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
`

const Title = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: white;
  z-index: 1;
`;
