import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import storage from "../utils/storage";

const query = `
    mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
        customerAccessTokenCreate(input: $input) {
        customerAccessToken {
            accessToken
            expiresAt
        }
        customerUserErrors {
            code
            field
            message
        }
        }
    }
`;

const variables = {
  input: {
    email: "haseebmlp2@gmail.com",
    password: "qwerty12345",
  },
};

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState("");
  const [data, setData] = useState({});

  function registerAction() {
    fetch("https://trappist-1e.myshopify.com/api/2023-01/graphql.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": "ff031bf264f816c80da166c05bc93a87",
      },
      body: JSON.stringify({
        query,
        variables: variables,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        storage.save({
          key: "token", // Note: Do not use underscore("_") in key!
          data: {
            token:
              data.data.customerAccessTokenCreate.customerAccessToken
                .accessToken,
          },
          expires: 1000 * 3600,
        }).then(() => {
            navigation.replace("HomeScreen")
        })

      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
        <View style={styles.fieldset}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.fieldset}>
          <Text style={styles.label}>Password:</Text>
          <TextInput style={styles.input} />
        </View>
        <Pressable style={styles.button} onPress={() => registerAction()}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <View style={styles.moreOption}>
          <Text style={styles.moreOptionText}>Don't have an account?</Text>
          <Text
            style={styles.moreOptionLogin}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            Register
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 150,
  },
  form: {
    width: "100%",
    paddingHorizontal: 15,
    gap: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    width: "100%",
    paddingHorizontal: 15,
  },
  fieldset: {
    width: "100%",
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#8d2ff6",
    width: "100%",
    paddingVertical: 10,
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#8d2ff6",
    borderRadius: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  moreOption: {
    gap: 5,
    marginTop: 50,
  },
  moreOptionText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  moreOptionLogin: {
    fontSize: 16,
    fontWeight: "600",
    color: "#8d2ff6",
    textAlign: "center",
  },
});
