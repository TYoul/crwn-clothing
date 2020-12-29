import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('ezspQ8N5KLEzudYbN5wN')
  .collection('cartItems')
  .doc('0Majfvc93gBliOgIgVyI');

firebase.doc('/users/ezspQ8N5KLEzudYbN5wN/cartItems/0Majfvc93gBliOgIgVyI');
firebase.collection('/users/ezspQ8N5KLEzudYbN5wN/cartItems');
