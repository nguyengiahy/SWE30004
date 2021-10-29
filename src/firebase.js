// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getPerformance  } from "firebase/performance";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvUC3w4OWJCeZ_6Cgmqe70jbXxX5VNs4Q",
  authDomain: "swe30004.firebaseapp.com",
  projectId: "swe30004",
  storageBucket: "swe30004.appspot.com",
  messagingSenderId: "962170537931",
  appId: "1:962170537931:web:665c1bed471f4bb06b584e",
  measurementId: "G-ZFYYNX1C7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const perf = getPerformance(app);