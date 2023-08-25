import styled from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons'; 

export default function CategoryCard ({title}) {
    return (
        <Shadow>
            <Container>
            <MaterialIcons name="category" size={24} color="black" />
            <Title>{title}</Title>
            </Container>
        </Shadow>
    )
}

const Shadow = styled.View`
    box-shadow: 0 5px 5px rgba(0,0,0, 0.1);
    padding: 15px 0;
`

const Container = styled.View`
    flex-direction: row;
    gap: 10px;
    padding: 15px 10px;
    background-color: white;
    border-radius: 10px;
    margin: 15px 0;
    margin-left: 15px;
`
const Title = styled.Text`
    font-size: 18px;
    font-weight: 600;
    color: black;
`