import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBVO9EEN7ekoQpWUG0a0mbu1TkQcU39K7o',
  authDomain: 'react-form-137f0.firebaseapp.com',
  projectId: 'react-form-137f0',
  storageBucket: 'react-form-137f0.appspot.com',
  messagingSenderId: '589548564118',
  appId: '1:589548564118:web:dabde33508cac5d2eb1cb7',
};

export const fire = firebase.initializeApp(firebaseConfig);
