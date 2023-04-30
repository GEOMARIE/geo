import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyAfGjEY9IaofsCOLb59ySVhwIXzeLWoQvM",
    authDomain: "geoapp-af3f8.firebaseapp.com",
    projectId: "geoapp-af3f8",
    storageBucket: "geoapp-af3f8.appspot.com",
    messagingSenderId: "148691388798",
    appId: "1:148691388798:web:e85cfc9756ce2395f10b2f"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
  