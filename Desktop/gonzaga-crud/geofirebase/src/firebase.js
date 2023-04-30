import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyCX4a7s6-nNKMt5ifZy-heCpGmJnuMDm6M",
    authDomain: "geoapp-7aaea.firebaseapp.com",
    projectId: "geoapp-7aaea",
    storageBucket: "geoapp-7aaea.appspot.com",
    messagingSenderId: "614621554514",
    appId: "1:614621554514:web:5503db000db78502577c8b"
  };
  
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
  