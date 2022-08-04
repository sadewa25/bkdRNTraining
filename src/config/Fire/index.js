// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2vqgg6RttV2W7BPBPh_zKBoRYQGxmxJA",
  authDomain: "sanbercode-5e586.firebaseapp.com",
  projectId: "sanbercode-5e586",
  storageBucket: "sanbercode-5e586.appspot.com",
  messagingSenderId: "580889300885",
  appId: "1:580889300885:web:7602f088ffa147b782f09c",
  measurementId: "G-0VLZREWT9K"
};

// Initialize Firebase
const Fire = initializeApp(firebaseConfig);
const analytics = getAnalytics(Fire);

export default Fire;