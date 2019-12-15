import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDQ-1ZnvnIVdg1nbSgMhNbxqEyDWIDknzQ',
  authDomain: 'sportsdale.firebaseapp.com',
  databaseURL: 'https://sportsdale.firebaseio.com',
  projectId: 'sportsdale',
  storageBucket: 'sportsdale.appspot.com',
  messagingSenderId: '842954468950',
  appId: '1:842954468950:web:6fcb3e5b9310c0ad9115f7'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
