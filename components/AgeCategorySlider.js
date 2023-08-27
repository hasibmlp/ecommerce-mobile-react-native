import { ScrollView } from "react-native";
import styled from "styled-components";

const ageLimits = [
    {
        ageStart: 0,
        ageEnd: 24,
    },
    {
        ageStart: 2,
        ageEnd: 4,
    },
    {
        ageStart: 5,
        ageEnd: 11,
    },
]

export default function AgeCategorySlider() {


  return (
    <Container>
        <Wrapper>
            <Title>Shop By Age</Title>
        </Wrapper>
        <ScrollView
            horizontal
            style={{ paddingBottom: 20 }}
            showsHorizontalScrollIndicator={false}
          >
            <HorizontalView>
                {ageLimits.map((item, index) => {
                return (
                    <Card key={index.toString()}>
                        <Cover>
                            <Image source={require("../assets/agebg.avif")} />
                            <Age>{item.ageStart}-{item.ageEnd}</Age>
                            <Text>Months</Text>
                        </Cover>
                    </Card>
                );
                })}
            </HorizontalView>
          </ScrollView>
    </Container>
  );
}


const Container = styled.View`
  background-color: transparent;
  padding: 10px 0;
  margin: 5px 0;
`;

const Wrapper = styled.View`
    padding: 10px 15px 15px;
`

const Title = styled.Text`
  font-size: 18px;
  font-weight: 300;
  color: black;
`;


const HorizontalView = styled.View`
    flex-direction: row;
    margin: 0 15px;
`

const Card = styled.View`
    margin-right: 15px;
`

const Cover = styled.View`
  width: 140px;
  height: 140px;
  border-radius: 5px;
  border-radius: 5px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Age = styled.Text`
    font-size: 28px;
    font-weight: 500;
    color: black;
`
const Text = styled.Text`
    font-size: 16px;
    font-weight: 400;
    color: black;
    text-transform: uppercase;
`