import { useState, useRef, useEffect } from 'react'
import { FlatList, View, Text, Image, StyleSheet, Dimensions } from "react-native";

const products = [
    {
        id: 1,
        imageUrl: require('../assets/india.jpeg'),
    },
    {
        id: 2,
        imageUrl: require('../assets/japan.jpeg'),
    },
    {
        id: 3,
        imageUrl: require('../assets/india.jpeg'),
    }
]



export function Carousal () {

    const [ activeIndex , setActiveInex ] = useState(0)
    // const flatListRef = useRef()

    // useEffect(() => {
    //     let interval = setInterval(() => {
    //         if (activeIndex === products.length - 1) {
    //             flatListRef.current.scrollToIndex({
    //                 index: 0,
    //                 animation: true,
    //             })
    //             console.log("last index")
    //         }else {
    //             flatListRef.current.scrollToIndex({
    //                 index: activeIndex + 1,
    //                 animation: true,
    //             })
    //             console.log("not last index")
    //         }
    //     }, 2000)
    //     return () => clearInterval(interval)
    // })

    const screenWidth = Dimensions.get('window').width

    let xyz = '../assets/prod3.jpg'

    function RenderItem ({item, index}) {
        return (
            <View style={{}}>
                <Image source={item.imageUrl} style={ {width: (screenWidth - 30), height: 300, resizeMode: 'contain' } }  />
            </View>
        )
    }

    products.map((item, index) => {
         activeIndex === index ? console.log("true") : console.log("false")
    }) 
    
    return (
        <FlatList
        data={products}
        renderItem={RenderItem}
        keyExtractor={item => item.id }
        horizontal = {true}
        // ref={flatListRef}
        // getItemLayout={(data, index) => ({width: screenWidth - 30, offset: (screenWidth - 30) * index, index: index})}
        pagingEnabled = {true}
        onScroll={(event) => {
            const scrollPosition = event.nativeEvent.contentOffset.x
            const index = scrollPosition / (screenWidth - 30)
            console.log("index: ", index)
            setActiveInex(index)
            console.log("acive index: ", activeIndex)
            
        }}
        />
    )
}

const styles = StyleSheet.create({
    
})