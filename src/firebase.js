import firebase from 'firebase/app';
import 'firebase/functions';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyClTtyKC5NWx8DBUg2m6c7L8PT38ZklPbg',
  authDomain: 'webdesign-bistro.firebaseapp.com',
  databaseURL: 'https://webdesign-bistro.firebaseio.com',
  projectId: 'webdesign-bistro',
  storageBucket: 'webdesign-bistro.appspot.com',
  messagingSenderId: '368620506597',
  appId: '1:368620506597:web:ca25e3123d363776d8b30c',
  measurementId: 'G-JRXRZMPNEM',
});

export default firebase;
