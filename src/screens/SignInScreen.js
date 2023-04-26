import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { signInWithFacebook, signInWithGoogle } from "../utils/auth";

// const googleLogo = require("../assets/google_logo.png");
const googleLogo = require("../../assets/google.png");
const facebookLogo = require("../../assets/facebook.png");
const whatsappLogo  = require("../../assets/whatsapp.png")
const SignInScreen = () => {
  return (
    <LinearGradient
      colors={["#091F25", "#0A2640", "#1E0E5F"]}
      style={styles.container}
    >
      <Text style={styles.heading}>Sign In</Text>
      <TouchableOpacity style={styles.googleButton} onPress={signInWithGoogle}>
        <View style={styles.googleButtonContent}>
          <Image source={googleLogo} style={styles.googleLogo} />
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.facebookButton}
        onPress={signInWithFacebook}
      >
        <View style={styles.googleButtonContent}>
          <Image source={facebookLogo} style={styles.googleLogo} />
          <Text style={styles.facebookButtonText}>Sign in with Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.whatsappButton}
        onPress={signInWithFacebook}
      >
        <View style={styles.googleButtonContent}>
          <Image source={whatsappLogo} style={styles.whatsappLogo} />
          <Text style={styles.whatsappButtonText}>Sign in with WhatsApp</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  googleButton: {
    backgroundColor: "#DAB4B0",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  googleButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  facebookButton: {
    backgroundColor: "#3b5998",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  facebookButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  whatsappButton: {
    backgroundColor: "#0F5F0C",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  whatsappButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  whatsappLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default SignInScreen;
