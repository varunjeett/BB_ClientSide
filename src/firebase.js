import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACeBBDccho0YfRvMJNazP6jYXi8DBSEks",
  authDomain: "gstonlinefiling-1a1c4.firebaseapp.com",
  databaseURL: "https://gstonlinefiling-1a1c4.firebaseio.com",
  projectId: "gstonlinefiling-1a1c4",
  storageBucket: "gstonlinefiling-1a1c4.appspot.com",
  messagingSenderId: "1095656642433",
  appId: "1:1095656642433:web:ba64daaf21ad1bd4e77a80",
  measurementId: "G-SQL6QZQWQW"
};


// eslint-disable-next-line
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, firebaseApp };
export default firebase;
