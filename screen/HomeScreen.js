import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.form}>
        <View style={styles.fieldset}>
          <Text style={styles.label}>Full Name:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.fieldset}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.fieldset}>
          <Text style={styles.label}>Password:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.fieldset}>
          <Text style={styles.label}>Confirm Password:</Text>
          <TextInput style={styles.input} />
        </View>
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert("You clicked this button")}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </Pressable>
        <View style={styles.moreOption}>
          <Text style={styles.moreOptionText}>Already have an account?</Text>
          <Text style={styles.moreOptionLogin}>Login</Text>
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
    textAlign: 'left',
    width: '100%',
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
    fontWeight: '600',
  },
  moreOption: {
    gap: 5,
    marginTop: 50,
  },
  moreOptionText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  moreOptionLogin: {
    fontSize: 16,
    fontWeight: '600',
    color: "#8d2ff6",
    textAlign: 'center',
  },
});
