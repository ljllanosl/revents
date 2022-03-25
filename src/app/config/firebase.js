import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAgyZWIoLApWVT6IvcGMrvKlIBU3LeOnTg',
  authDomain: 'revents-course-3bc22.firebaseapp.com',
  projectId: 'revents-course-3bc22',
  storageBucket: 'revents-course-3bc22.appspot.com',
  messagingSenderId: '856486217084',
  appId: '1:856486217084:web:2e1ffd92eb7da852cf50f9',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
