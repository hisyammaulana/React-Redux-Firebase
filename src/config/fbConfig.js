import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/auth'

var config = {
  apiKey: "AIzaSyBeh4umCLzRGgC_wyK3-IW5B4iynab5Lww",
  authDomain: "my-react-firebase-5360c.firebaseapp.com",
  databaseURL: "https://my-react-firebase-5360c.firebaseio.com",
  projectId: "my-react-firebase-5360c",
  storageBucket: "my-react-firebase-5360c.appspot.com",
  messagingSenderId: "253927802231",
  appId: "1:253927802231:web:a693e0df0cb7f2daaecd72",
  measurementId: "G-H76KPZR6YD"
};

 // Initialize Firebase
 firebase.initializeApp(config);
//  firebase.analytics();
 firebase.firestore().settings({ timestampsInSnapshots: true });

 export default firebase;