import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB2iRfV0qVLuKJxksAbTrxfCIRTxcVoXQc",
  authDomain: "bada-business-simran.firebaseapp.com",
  databaseURL: "https://bada-business-simran.firebaseio.com",
  projectId: "bada-business-simran",
  storageBucket: "bada-business-simran.appspot.com",
  messagingSenderId: "262412852680",
  appId: "1:262412852680:web:0504f9f1234d6f755cb4fd",
  measurementId: "G-V97XK2QB3W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };
export default firebase;
