import { useState } from 'react'
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

    const screenWidth = Dimensions.get('window').width

    let xyz = '../assets/prod3.jpg'

    function RenderItem ({item, index}) {
        return (
            <View >
                <Image source={item.imageUrl} style={ {width: (screenWidth - 30), height: 350 } }  />
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
        pagingEnabled = {true}
        style={{flexGrow: 0 }}
        />
    )
}

const styles = StyleSheet.create({
    
})