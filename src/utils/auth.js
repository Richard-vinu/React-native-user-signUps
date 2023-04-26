// import { makeRedirectUri } from "expo-auth-session";
// import * as Google from "expo-auth-session/providers/google";
// import * as Facebook from "expo-auth-session/providers/facebook";
// import * as WebBrowser from "expo-web-browser";
// import { Platform } from "react-native";
// import { GOOGLE_CLIENT_ID, FACEBOOK_APP_ID } from "@env";

// WebBrowser.maybeCompleteAuthSession();

// const useProxy = Platform.select({ web: false, default: true });
// const redirectUri = makeRedirectUri({ useProxy });

export const signInWithGoogle = async () => {
  try {
    // const { type, user } = await Google.logInAsync({
    //   clientId: GOOGLE_CLIENT_ID,
    //   redirectUri,
    // });
    // if (type === "success") {
    //   console.log(user);
    //   // Add your code for handling successful sign in with Google here
    // }
  } catch (error) {
    console.log(error);
    // Add your code for handling sign in errors here
  }
};

export const signInWithFacebook = async () => {
  try {
    // const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    //   appId: FACEBOOK_APP_ID,
    //   permissions: ["public_profile", "email"],
    // });
    // if (type === "success") {
    //   console.log(token);
    //   // Add your code for handling successful sign in with Facebook here
    // }
  } catch (error) {
    console.log(error);
    // Add your code for handling sign in errors here
  }
};
