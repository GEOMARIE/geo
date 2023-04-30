import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyDeXM0w9unSRzDIwCPmDxd6tAcrPStZLFY",
    authDomain: "geoapp-6a47d.firebaseapp.com",
    projectId: "geoapp-6a47d",
    storageBucket: "geoapp-6a47d.appspot.com",
    messagingSenderId: "1008992388952",
    appId: "1:1008992388952:web:5447f719435d6ed7a4872d"
  };
  

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
  