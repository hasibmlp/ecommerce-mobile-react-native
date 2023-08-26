import { useState, useEffect } from "react";
import { useQuery, gql } from '@apollo/client';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";
import styled from "styled-components";

import storage from "../utils/storage";
import { Carousal } from "../components/Carousal";
import VerticalCarousal from "../components/VerticalCarousal";
import UserInformation from "../components/UserInformation";
import CategoryCard from "../components/CategoryCard";
import Card from "../components/Card";
import { GET_COLLECTION } from "../graphql/queries";


const products = [
  {
    image: require("../assets/prod.jpg"),
    title: "Amazing Product",
    price: "100.0",
  },
  {
    image: require("../assets/prod.jpg"),
    title: "Amazing Product2",
    price: "100.0",
  },
  {
    image: require("../assets/prod.jpg"),
    title: "Amazing Product3",
    price: "100.0",
  }
]

export default function HomeScreen({ navigation }) {
  const { data, loading, error } = useQuery(GET_COLLECTION)


  const prods = data.collection.products.edges.map(({node}) => {
    console.log(node)
    return {
      id: node.id,
      title: node.title,
      image: node.featuredImage.url
    }
  })


  console.log(prods)


  // const products = 

  // const [token, setToken] = useState("");
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   const getToken = () => {
  //     console.log("getToken is running...");
  //     storage
  //       .load({
  //         key: "token",
  //         autoSync: false,
  //         syncInBackground: true,
  //         syncParams: {
  //           someFlag: true,
  //         },
  //       })
  //       .then((ret) => {
  //         console.log(ret.token);
  //         setToken(ret.token);
  //       })
  //       .catch((err) => {
  //         console.warn(err.message);
  //       });
  //   };
  //   getToken();
  // }, []);

  // useEffect(() => {
  //   const getUserData = () => {
  //     console.log("TOKEN: ", token);
  //     const query = `
  //       query {
  //         customer(customerAccessToken: "${token}" ) {
  //           id
  //           firstName
  //           lastName
  //           acceptsMarketing
  //           email
  //           phone
  //         }
  //       }
  //       `;

  //     fetch("https://trappist-1e.myshopify.com/api/2023-01/graphql.json", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "X-Shopify-Storefront-Access-Token":
  //           "ff031bf264f816c80da166c05bc93a87",
  //       },
  //       body: JSON.stringify({
  //         query,
  //       }),
  //     })
  //       .then((r) => r.json())
  //       .then((data) => {
  //         console.log(data?.data?.customer?.email);
  //         setUser(data?.data?.customer);
  //       });
  //   };
  //   getUserData();
  // }, [token]);

  // const guestWelcome = <Text style={styles.text}>Welcome Guest!</Text>;
  // const userWelcome = <Text style={styles.text}> Hello, {user?.email}</Text>;

  

  if (loading) return (<SubTitle>Loading..</SubTitle>)

  return (
    <View style={styles.container}>
      <ScrollView>
        <UserInformation navigation={navigation} />
        <Carousal />

        <ScrollView
          style={{ flexGrow: 0 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <CategoryCard title={"Men"} />
          <CategoryCard title={"Women"} />
          <CategoryCard title={"Large Sizes"} />
          <CategoryCard title={"Wathes"} />
        </ScrollView>

        {/* <VerticalCarousal /> */}

        <SubTitle>Featured</SubTitle>

        <ScrollView
          horizontal
          style={{ paddingBottom: 20 }}
          showsHorizontalScrollIndicator={false}
        >

          {products.map((item) => {
            return (
              <Card
                navigation={navigation}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </ScrollView>

        {/* {user && Object.keys(user).length ? userWelcome : guestWelcome}

        {user && Object.keys(user).length ? (
          <Pressable
            onPress={() => {
              // remove a single record
              storage.remove({
                key: "token",
              });
              setToken("");
            }}
          >
            <Text>LogOut</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          >
            <Text>Login</Text>
          </Pressable>
        )} */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
});

const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.2;
  color: gray;
  padding: 0 15px;
`;
