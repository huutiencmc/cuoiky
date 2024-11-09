import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { router } from 'expo-router';

const HomeScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { width, height } = Dimensions.get("window");

  const handleSignIn = () => {
    // Handle sign-in logic here
    router.push('/SignIn')
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/healthy-breakfast-white-background 1.png")}
          style={[styles.headerImage, { width, height }]}
        />
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={[styles.button, styles.btnSignIn]} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>or</Text>
        <TouchableOpacity style={[styles.button, styles.googleButton]}>
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.facebookButton]}>
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.appleButton]}>
          <Text style={styles.buttonText}>Continue with Apple</Text>
        </TouchableOpacity>
        <Text style={styles.signupText} onPress={()=> router.push('/SignUp')}>
          Do not have an account? <Text style={styles.signupLink}>Sign up</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerImage: {
    // resizeMode: "cover",
    flex: 1
  },
  body: {
    flex: 1,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
        top: '50%',
        bottom: 0,
        left: 0,
        right: 0
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    // maxWidth: "300px",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  btnSignIn:{
    backgroundColor: "#F87146"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  googleButton: {
    backgroundColor: "#4285F4",
  },
  facebookButton: {
    backgroundColor: "#4267B2",
  },
  appleButton: {
    backgroundColor: "#000",
  },
  orText: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
  },
  signupText: {
    fontSize: 16,
    color: "#888",
    marginTop: 20,
  },
  signupLink: {
    color: "#007bff",
  },
});

export default HomeScreen;
