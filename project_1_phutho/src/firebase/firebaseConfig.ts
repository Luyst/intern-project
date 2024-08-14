import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCgmYI3wtm1aU2d1S81S2oCto5va0FRIAo',
    authDomain: 'phu-tho.firebaseapp.com',
    projectId: 'phu-tho',
    storageBucket: 'phu-tho.appspot.com',
    messagingSenderId: '652842028572',
    appId: '1:652842028572:web:98600115563de1fb6b59d9',
    measurementId: 'G-7RBKVDMVGF',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, ref, getDownloadURL };
