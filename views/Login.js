import * as React from "react";
import { View, Text, StyleSheet, Button, TextInput, SafeAreaView } from "react-native";
import { Header } from 'react-native-elements';

export default function LoginView(props) {
  const [email, setEmail] = React.useState("")
  
  function login() {
    props.onLogin();
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <SafeAreaView>
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />
      </SafeAreaView>
      <Button
        onPress={login}
        title="Login"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3a5790",
    height: "100%"
  },
  title: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    margin: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
