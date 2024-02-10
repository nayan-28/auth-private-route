// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyC6N0HGconiZQlYZPMWvE6gi3bC79pr_Dg",
    authDomain: "auth-private-route-f87f2.firebaseapp.com",
    projectId: "auth-private-route-f87f2",
    storageBucket: "auth-private-route-f87f2.appspot.com",
    messagingSenderId: "1005530360712",
    appId: "1:1005530360712:web:4bc4c23ea0f951bbf8283d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
