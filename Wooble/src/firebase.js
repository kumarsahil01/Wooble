
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBIgZI810LMCr9soy19pprxhKXgEy-A0F4",
  authDomain: "chat-app-d1d0a.firebaseapp.com",
  projectId: "chat-app-d1d0a",
  storageBucket: "chat-app-d1d0a.appspot.com",
  messagingSenderId: "891440209535",
  appId: "1:891440209535:web:22d740507ff85dc80d694a"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
