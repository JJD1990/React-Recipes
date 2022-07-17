import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAItXxVzD5-Z5G2gbKB7A8yT1IhiMi18aA",
    authDomain: "cooking-ninja-b19c4.firebaseapp.com",
    projectId: "cooking-ninja-b19c4",
    storageBucket: "cooking-ninja-b19c4.appspot.com",
    messagingSenderId: "956790397629",
    appId: "1:956790397629:web:ede0fb191e8d35a659b5d4"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }