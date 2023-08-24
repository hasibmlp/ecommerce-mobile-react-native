
import { Dimensions, FlatList, Text, Animated } from 'react-native'
import styled from 'styled-components'

const { width, height } = Dimensions.get('screen')

const ITEM_WIDTH = width
const ITEM_HEIGHT = height * .75

const DOT_SIZE = 8
const DOT_SPACING = 8
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING 

const images = [
    require("../assets/prod.jpg"),
    require("../assets/prod2.jpg"),
    require("../assets/prod3.jpg"),
]

export default function VerticalCarousal () {


    return (
        <Container>
            <FlatList
                data={images}
                keyExtractor={(_, index) => index.toString() }
                showsVerticalScrollIndicator={false}
                snapToInterval={ITEM_HEIGHT}
                decelerationRate={'fast'}
                bounces={false}
                renderItem={({item}) => {
                    return(
                            <Image source={item}  />
                    )
                }}
            />
            <Pagination>
                {
                    images.map((_, index) => {
                        return(
                            <Dot/>
                        )
                    })
                }
                <DotIndicator />
            </Pagination>
        </Container>
    )
}

const Container = styled.View`
    height: ${ITEM_HEIGHT};
    overflow: hidden;
    position: relative;
`

const Cover = styled.View`
`

const Image = styled.Image`
    width: ${ITEM_WIDTH};
    height: ${ITEM_HEIGHT};
`
const Pagination = styled.View`
    position: absolute;
    top: ${ITEM_HEIGHT / 2};
    left: 20px;
`
const Dot = styled.View`
    width: ${DOT_SIZE}px;
    height: ${DOT_SIZE}px;
    border-radius: ${DOT_SIZE}px;
    background-color: #333;
    margin-bottom: ${DOT_SPACING}px;
`
const DotIndicator = styled.View`
    width: ${DOT_INDICATOR_SIZE}px;
    height: ${DOT_INDICATOR_SIZE}px;
    border-radius: ${DOT_INDICATOR_SIZE}px;
    border: 1px solid #333;
    position: absolute;
    top: ${-DOT_SIZE / 2};
    left: ${-DOT_SIZE / 2};
`