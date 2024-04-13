// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvq7zxbDvvKBzdWbpM5yig6I0WaX4XXZ0",
  authDomain: "project-rea-9c8b7.firebaseapp.com",
  projectId: "project-rea-9c8b7",
  storageBucket: "project-rea-9c8b7.appspot.com",
  messagingSenderId: "1069273146291",
  appId: "1:1069273146291:web:1daf970ba4c8ea44f2a1c6",
  measurementId: "G-3Z9GLCH2YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const anotherApp = initializeApp(firebaseConfig, "anotherApp");
const anotherAuth = getAuth(anotherApp);
export { auth, anotherAuth };
//export default auth