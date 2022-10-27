import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgEhVYZZQ2ryjQ6ef4CnZ4hS1-lBei2E0",
  authDomain: "socialmedical-296d4.firebaseapp.com",
  projectId: "socialmedical-296d4",
  storageBucket: "socialmedical-296d4.appspot.com",
  messagingSenderId: "227856834537",
  appId: "1:227856834537:web:e22c77b390946973bb7578"
};

// Inicialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)