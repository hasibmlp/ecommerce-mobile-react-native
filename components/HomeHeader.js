import React from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import SearchBarInput from "./SearchBarInput";
import { InfoSlider } from "./InfoSlider";

export default function HomeHeader() {
  return (
    <MainContainer>
      <Container>
        <Wrapper>
          <Welcome>Good Morning!</Welcome>
          <ShopCategoryOption>SHOP KIDS</ShopCategoryOption>
        </Wrapper>
        <IconWrapper>
          <AntDesign name="hearto" size={20} color="black" />
        </IconWrapper>
      </Container>
      <SearchBarInput />
      <InfoSlider />
    </MainContainer>
  );
}

const MainContainer = styled.View`
  padding: 0 0 15px;
  background-color: #eaf6ff;
`;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px 15px;
`;
const Wrapper = styled.View`
  row-gap: 5px;
`;

const Welcome = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

const ShopCategoryOption = styled.Text``;

const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background-color: white;
  border-radius: 100%;
`;

