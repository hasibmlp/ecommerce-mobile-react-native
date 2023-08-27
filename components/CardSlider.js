import { ScrollView } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { useQuery} from '@apollo/client';

import { GET_COLLECTION } from "../graphql/queries";

export default function CardSlider({ navigation, image, title, price }) {

    const { data, loading, error } = useQuery(GET_COLLECTION)


  const prods = data?.collection?.products?.edges?.map(({node}) => {
    console.log(node)
    return {
      id: node.id,
      title: node.title,
      image: node.featuredImage.url
    }
  })

  return (
    <Container>
        <Wrapper>
            <Title>Curated For You</Title>
            <ShopAll>Shop All</ShopAll>
        </Wrapper>
        <ScrollView
            horizontal
            style={{ paddingBottom: 20 }}
            showsHorizontalScrollIndicator={false}
          >
            <HorizontalView>
                {prods.map((item, index) => {
                return (
                    <Card key={index.toString()} >
                        <Cover>
                            <Image src={item.image} />
                            <AntDesign name="hearto" size={16} color="black" style={{ zIndex: 1, marginRight: 10, marginTop: 10, }} />
                        </Cover>
                        <Contents>
                            <ProdVendor>Cloths</ProdVendor>
                            <ProdTitle numberOfLines={1} >{item.title}</ProdTitle>
                            <Price>1,500 AED</Price>
                            <ColorSwatches>
                                <ColorSwatch></ColorSwatch>
                                <ColorSwatch></ColorSwatch>
                                <ColorSwatch></ColorSwatch>
                            </ColorSwatches>
                        </Contents>
                    </Card>
                );
                })}
            </HorizontalView>
          </ScrollView>
    </Container>
  );
}


const Container = styled.View`
  background-color: white;
  padding: 10px 0;
  margin: 5px 0;
`;

const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 15px;
`

const Title = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: black;
`;

const ShopAll = styled.Text`
    font-size: 11px;
    font-weight: 400;
    color: #8b0000;
    text-transform: uppercase;
`

const HorizontalView = styled.View`
    flex-direction: row;
    margin: 0 15px;
`

const Card = styled.View`
    margin-right: 15px;
`

const Cover = styled.View`
  width: 140px;
  height: 210px;
  border-radius: 5px;
  overflow: hidden;
  align-items: flex-end;
  justify-content: flex-start;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Contents = styled.View`
    align-items: center;
    gap: 5px;
    padding-top: 15px;
    
`

const ProdVendor = styled.Text`
font-size: 12px;
    font-weight: 500;
    color: black;
`

const ProdTitle = styled.Text`
    font-size: 12px;
    font-weight: 300;
    color: black;
    width: 100px;
    text-align: center;
`

const Price = styled.Text`
  font-size: 12px;
  font-weight: 300;
  color: #8b0000;
`;

const ColorSwatches = styled.View`
    flex-direction: row;
    column-gap: 5px;
    padding-top: 5px;
`

const ColorSwatch = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    border: 1px solid #ddd;
    background-color: pink;
`



