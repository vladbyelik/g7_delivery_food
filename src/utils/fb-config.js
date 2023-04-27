import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCVP1_-_E36y2UkrKX1iw4wVed3JK3akyU",
  authDomain: "g8test-c0865.firebaseapp.com",
  databaseURL: "https://g8test-c0865-default-rtdb.firebaseio.com",
  projectId: "g8test-c0865",
  storageBucket: "g8test-c0865.appspot.com",
  messagingSenderId: "745836402681",
  appId: "1:745836402681:web:7b942a90c5b164a5fc0f28"
};

firebase.initializeApp(firebaseConfig);

export default firebase;