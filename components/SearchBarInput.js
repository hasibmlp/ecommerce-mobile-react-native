import React from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons'; 

export default function SearchBarInput() {
  return (
    <Container>
      <SearchBar>
        <AntDesign name="search1" size={22} color="black" />
        <SearchText>Search</SearchText>
      </SearchBar>
      <NotifyIcon>
      <Ionicons name="notifications-outline" size={24} color="black" />
      </NotifyIcon>
    </Container>
  );
}

const Container = styled.View`
    flex-direction: row;
    gap: 15px;
    padding: 0 15px 15px;
`;
const Wrapper = styled.View``;

const NotifyIcon = styled.View`
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background-color: white;
  border-radius: 5px;
`;

const SearchBar = styled.View`
  background-color: white;
  height: 45px;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  gap: 10px;
  border-radius: 5px;
  flex: 1;
`;

const SearchText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: gray;
`;
