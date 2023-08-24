import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

import storage from "../utils/storage";
import { Carousal } from "../components/Carousal";
import UserInformation from "../components/UserInformation";

export default function HomeScreen({ navigation }) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const getToken = () => {
      console.log("getToken is running...");
      storage
        .load({
          key: "token",
          autoSync: false,
          syncInBackground: true,
          syncParams: {
            someFlag: true,
          },
        })
        .then((ret) => {
          console.log(ret.token);
          setToken(ret.token);
        })
        .catch((err) => {
          console.warn(err.message);
        });
    };
    getToken();
  }, []);

  useEffect(() => {
    const getUserData = () => {
      console.log("TOKEN: ", token);
      const query = `
        query {
          customer(customerAccessToken: "${token}" ) {
            id
            firstName
            lastName
            acceptsMarketing
            email
            phone
          }
        }
        `;

      fetch("https://trappist-1e.myshopify.com/api/2023-01/graphql.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token":
            "ff031bf264f816c80da166c05bc93a87",
        },
        body: JSON.stringify({
          query,
        }),
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(data?.data?.customer?.email);
          setUser(data?.data?.customer);
        });
    };
    getUserData();
  }, [token]);

  const guestWelcome = <Text style={styles.text}>Welcome Guest!</Text>;
  const userWelcome = <Text style={styles.text}> Hello, {user?.email}</Text>;

  return (
    <View style={styles.container}>

      <UserInformation navigation={navigation} />
      <Carousal />

      {user && Object.keys(user).length ? userWelcome : guestWelcome}

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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
});
