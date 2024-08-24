// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBZgJxV0qYcwXQmujkBM9LOq4UvXxPjTHQ',
	authDomain: 'fireship-svelte-tutorial2.firebaseapp.com',
	projectId: 'fireship-svelte-tutorial2',
	storageBucket: 'fireship-svelte-tutorial2.appspot.com',
	messagingSenderId: '316958454010',
	appId: '1:316958454010:web:19bcdd437b747aedb99943'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { app, db, auth, storage };
