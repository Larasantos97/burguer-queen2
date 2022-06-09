import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA6gbvL8ZwGRindMQbAUVEe_Ycvl_yEOec",
  authDomain: "mars-burger.firebaseapp.com",
  projectId: "mars-burger",
  storageBucket: "mars-burger.appspot.com",
  messagingSenderId: "284547344854",
  appId: "1:284547344854:web:b2501abae59c9ebe5b9c77"
};

export const app = initializeApp(firebaseConfig);
console.log(app);