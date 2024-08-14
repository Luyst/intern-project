// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCgmYI3wtm1aU2d1S81S2oCto5va0FRIAo',
    authDomain: 'phu-tho.firebaseapp.com',
    projectId: 'phu-tho',
    storageBucket: 'phu-tho.appspot.com',
    messagingSenderId: '652842028572',
    appId: '1:652842028572:web:98600115563de1fb6b59d9',
    measurementId: 'G-7RBKVDMVGF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
