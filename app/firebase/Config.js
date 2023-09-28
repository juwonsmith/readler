import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaCFUzCpMGVEiy_av-SsC8WCTiPCTX5Qg",
  authDomain: "readler-625f4.firebaseapp.com",
  projectId: "readler-625f4",
  storageBucket: "readler-625f4.appspot.com",
  messagingSenderId: "774008822530",
  appId: "1:774008822530:web:ee37d33346c06f704a401b",
};

//init firebase
const app = initializeApp(firebaseConfig);

//init firestore
const db = getFirestore(app);

const timestamp = new Timestamp();
//init  firebase auth
const auth = getAuth(app);
export { db, auth, timestamp };
