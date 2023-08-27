import styled from "styled-components";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const itemWidth = Math.floor(screenWidth / 3);
console.log(itemWidth);

export default function BannerImage() {
  return (
    <Container>
        <Cover>
            <Image source={require("../assets/banner.jpg")} />
        </Cover>
    </Container>
  );
}

const Container = styled.View`
  width: ${screenWidth};
  padding: 5px 0;
`;

const Cover = styled.View`
    width: 100%;
    height: 100px;
`

const Image = styled.Image`
  width: 100%;
  height: 100px;
`;
