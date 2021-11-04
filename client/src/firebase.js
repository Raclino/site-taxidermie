import firebase from "firebase/app";
import "firebase/auth";
// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDIbKSvOv_Q06sWgVqeUr86D-D6MNX7-t8",
  authDomain: "sitetaxidermie.firebaseapp.com",
  projectId: "sitetaxidermie",
  storageBucket: "sitetaxidermie.appspot.com",
  messagingSenderId: "129357949812",
  appId: "1:129357949812:web:020f9ea92c6d068e351a21",
  measurementId: "G-P0R109DHSB",
};

// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
