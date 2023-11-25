import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhAkIYNkytNIY_OyF-UQxIwa2YKuiBSMU",
    authDomain: "olx-clone-2bf70.firebaseapp.com",
    projectId: "olx-clone-2bf70",
    storageBucket: "olx-clone-2bf70.appspot.com",
    messagingSenderId: "134649309119",
    appId: "1:134649309119:web:0fa2369b7199343302e30a",
    measurementId: "G-ZSN6T564LJ"
  };

  export default firebase.initializeApp(firebaseConfig)