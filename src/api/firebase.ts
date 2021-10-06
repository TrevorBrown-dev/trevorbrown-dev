// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyC-g6IxbWnLpI3Ugjsw055MKZjWGHyRMyw',
    authDomain: 'trevorbrowndev-9c360.firebaseapp.com',
    projectId: 'trevorbrowndev-9c360',
    storageBucket: 'trevorbrowndev-9c360.appspot.com',
    messagingSenderId: '733335808790',
    appId: '1:733335808790:web:b865e7f33387ec0e59fe37',
    measurementId: 'G-TKSB0N257K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
