import { useState, useRef, useEffect } from 'react'
import { FlatList, Dimensions, Image, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import styled from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons'; 



const products = [
    {
        iconName: 'gift-outline',
        text: 'free gift packing'
    },
    {
        iconName: 'send-outline',
        text: 'all world delevory'
    },
    {
        iconName: 'card-outline',
        text: 'free gift packing'
    },
]

const screenWidth = Dimensions.get('screen').width
const itemWidth = screenWidth - 30


export function InfoSlider () {

    const [ activeIndex , setActiveIndex ] = useState(0)
    const flatListRef = useRef(null)

    // useEffect(() => {
    //     setInterval(() => {
    //         if(activeIndex === products.length -1) {
    //             flatListRef.current.scrollToIndex({
    //                 index: 0,
    //                 animation: true,
    //             })
    //         }else {
    //             flatListRef.current.scrollToIndex({
    //                 index: activeIndex + 1,
    //                 animation: true,
    //             })
    //         }
    //     }, 2000)
    // })
    

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % products.length);
        }, 3000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

      useEffect(() => {
        flatListRef.current.scrollToIndex({
            animation: true,
            index: activeIndex,
        })
    }, [activeIndex]);


    const  getItemLayout = (data, index) => ({
        length: screenWidth,
        offset: screenWidth * index,
        index: index,
    })

    function handleScroll (event) {
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const contentOffset = event.nativeEvent.contentOffset.x
        
        const selectedIndex = Math.floor(contentOffset / viewSize)

        // setActiveIndex(selectedIndex)
        // console.log("SELECTED INDEX: ",selectedIndex)
        //  console.log(selectedIndex)
    }

    function RenderItem ({item, index}) {
        return (
                <Container >
                    <Cover>
                        <Image source={require("../assets/notifyImage.jpeg")}  style={ {width: '100%', height: '100%', position: 'absolute', top: 0, left: 0  } } resizeMode='repeat'  />
                        <Ionicons style={{ position: 'absolute', left: 15,  }} name={item.iconName} size={22} color="white" />
                        <Text>{item.text}</Text>
                    </Cover>
                </Container>
        )
    }

    return (
        <Wrapper>
            <FlatList
            data={products}
            ref={flatListRef}
            getItemLayout={getItemLayout}
            renderItem={RenderItem}
            keyExtractor={item => item.id }
            horizontal = {true}
            pagingEnabled = {true}
            style={{flexGrow: 0}}
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            
            />
        </Wrapper>
    )
}

const Wrapper = styled.View`
`

const Container = styled.View`
    flex-direction: row;
    height: 45px;
    width: ${itemWidth}px;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    background-color: black;
    overflow: hidden;
    margin: 0 15px;
`

const Cover = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Text = styled.Text`
    font-size: 12px;
    font-weight: 500;
    color: white;
    z-index: 1;
    text-transform: uppercase;
`
