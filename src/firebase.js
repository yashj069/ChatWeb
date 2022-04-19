import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/compat/app";
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyD1Fq7ALlTpG5j-QT-8nyjIdNh1ND4zrqw",
    authDomain: "chat-ac536.firebaseapp.com",
    projectId: "chat-ac536",
    storageBucket: "chat-ac536.appspot.com",
    messagingSenderId: "814330538371",
    appId: "1:814330538371:web:7dd15f6e9730c3465f6eb6",
  })
  .auth();

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default firebase;
