// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVxh8lVom92r_4CR166AJCvlx-5gbvbgQ",
  authDomain: "picture-gallery-30839.firebaseapp.com",
  projectId: "picture-gallery-30839",
  storageBucket: "picture-gallery-30839.appspot.com",
  messagingSenderId: "273882374813",
  appId: "1:273882374813:web:c15b76f8e1720575c12a74",
  measurementId: "G-NE2M8MC60E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}


