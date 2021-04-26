import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdNLXf03GDVPTakrLJSmd6Sff11PJuT2c",
  authDomain: "disney-clone-plus.firebaseapp.com",
  projectId: "disney-clone-plus",
  storageBucket: "disney-clone-plus.appspot.com",
  messagingSenderId: "835091214931",
  appId: "1:835091214931:web:f0e33ab93a459bc14e4ca6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
