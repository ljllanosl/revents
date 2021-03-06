import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'revents-course-3bc22.firebaseapp.com',
  databaseURL: 'https://revents-course-3bc22-default-rtdb.firebaseio.com',
  projectId: 'revents-course-3bc22',
  storageBucket: 'revents-course-3bc22.appspot.com',
  messagingSenderId: '856486217084',
  appId: '1:856486217084:web:2e1ffd92eb7da852cf50f9',
};

export const app = initializeApp(firebaseConfig);
