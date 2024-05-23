// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5JulozdRquZ1kg7CojBW5e6md84J1ukU",
  authDomain: "danishop-2bcbd.firebaseapp.com",
  projectId: "danishop-2bcbd",
  storageBucket: "danishop-2bcbd.appspot.com",
  messagingSenderId: "110032618360",
  appId: "1:110032618360:web:6c5863d63ce60152d07e8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);