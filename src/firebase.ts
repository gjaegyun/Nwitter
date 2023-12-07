import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDFQVxUXtHgcdfUACJgDKx7NNEwtYLhhk8",
    authDomain: "nwitter-reloaded-c4618.firebaseapp.com",
    projectId: "nwitter-reloaded-c4618",
    storageBucket: "nwitter-reloaded-c4618.appspot.com",
    messagingSenderId: "897335361441",
    appId: "1:897335361441:web:ecd879712bb74f3fda55e0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);