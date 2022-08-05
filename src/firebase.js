import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJ3JISfrNo5i8osHElVXiqolgEXLb8jtg",
  authDomain: "chatapp-abde8.firebaseapp.com",
  databaseURL: "https://chatapp-abde8-default-rtdb.firebaseio.com",
  projectId: "chatapp-abde8",
  storageBucket: "chatapp-abde8.appspot.com",
  messagingSenderId: "234612366221",
  appId: "1:234612366221:web:f9ff0f3a41f3bfa7ecbbc4",
};

export const app = initializeApp(firebaseConfig);
