import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCcXaBSSi4nyva-Bn0xJ1ikexzerLkLmus',
  authDomain: 'crwn-db-de3e1.firebaseapp.com',
  projectId: 'crwn-db-de3e1',
  storageBucket: 'crwn-db-de3e1.appspot.com',
  messagingSenderId: '257892462543',
  appId: '1:257892462543:web:cea6a733b16d65521becba',
  measurementId: 'G-4ZCZ4L87YY',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
