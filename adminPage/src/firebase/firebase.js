// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSL4IYneyCN6GDuW_H8dXGKhdlI-89qHA",
  authDomain: "adhikar-a4b0e.firebaseapp.com",
  projectId: "adhikar-a4b0e",
  storageBucket: "adhikar-a4b0e.appspot.com",
  messagingSenderId: "396056880919",
  appId: "1:396056880919:web:ed582b3c509f54f30e3952"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
