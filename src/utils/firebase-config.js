// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCf6h8WVWbHZesp_VrXG2meHfY0Prt8HSo",
  authDomain: "react-netflix-a7877.firebaseapp.com",
  projectId: "react-netflix-a7877",
  storageBucket: "react-netflix-a7877.appspot.com",
  messagingSenderId: "740799808670",
  appId: "1:740799808670:web:23fb17f68238bdbc62e78f",
  measurementId: "G-J45KVN6ZG0"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);