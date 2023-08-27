import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfDcKLjBpRnm2Twm5W0hhFN5WvUpr0D3s",
  authDomain: "intern-project-4979d.firebaseapp.com",
  projectId: "intern-project-4979d",
  storageBucket: "intern-project-4979d.appspot.com",
  messagingSenderId: "868391892947",
  appId: "1:868391892947:web:2df617425cbd336f856126"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);