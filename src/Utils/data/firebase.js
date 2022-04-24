// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvBySrlKaRi8PUcMEs-5iJYzd1HEeehaI",
    authDomain: "microstore-project.firebaseapp.com",
    projectId: "microstore-project",
    storageBucket: "microstore-project.appspot.com",
    messagingSenderId: "278636846899",
    appId: "1:278636846899:web:1a06fdfd94d71138ed2846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);
export default database;
