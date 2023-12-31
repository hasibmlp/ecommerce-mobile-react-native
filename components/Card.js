import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

export default function Card({ navigation, image, title, price }) {
  return (
    <Shadow>
      <TouchableOpacity onPress={() => navigation.navigate("ProductDetailScreen")}>
          <Container>
          <Cover>
              <Image src={image} />
          </Cover>
              <Details>
                  <Title>{title}</Title>
                  <Price>{price}</Price>
              </Details>
          </Container>
        </TouchableOpacity>
    </Shadow>
  );
}

const Shadow = styled.View`
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`

const Container = styled.View`
  width: 230px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  margin-left: 20px;
  margin-top: 30px;
  
`;
const Cover = styled.View`
  width: 100%;
  height: 300px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Details = styled.View`
    padding: 10px;
`

const Price = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: black;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: black;
`;


