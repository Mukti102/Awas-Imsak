import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDgvMvrRzV6F4nwnP4G0LxGCLTPJrWcNfo",
  authDomain: "ramadhan-app-c3959.firebaseapp.com",
  projectId: "ramadhan-app-c3959",
  storageBucket: "ramadhan-app-c3959.appspot.com",
  messagingSenderId: "1047729611259",
  appId: "1:1047729611259:web:488ad7c3f79405a564ab5e",
  measurementId: "G-WKLQGDXKK6",
  databaseURL: "https://ramadhan-app-c3959-default-rtdb.firebaseio.com/",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
