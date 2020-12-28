import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBsNlQnsHtkyiDkYNsD7LCGW4c2NsV_m1o',
  authDomain: 'crwn-shoping.firebaseapp.com',
  projectId: 'crwn-shoping',
  storageBucket: 'crwn-shoping.appspot.com',
  messagingSenderId: '68363899472',
  appId: '1:68363899472:web:a694ec20bf8b8559583755',
  measurementId: 'G-4V1NT1H80K',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
