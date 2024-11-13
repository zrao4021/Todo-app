

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import {getAuth} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyBfsrRuKMPp_C8tFdhrxPnh3KuwSFiW_cc",
    authDomain: "todoapp-3c7a9.firebaseapp.com",
    projectId: "todoapp-3c7a9",
    storageBucket: "todoapp-3c7a9.firebasestorage.app",
    messagingSenderId: "823032453846",
    appId: "1:823032453846:web:9cc173830954008c174777"
  };


  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

 
  