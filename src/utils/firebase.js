import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

//webapp configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq70mBwOZPt9MaEGgDCsFekZiPawKwAXY",
  authDomain: "quote-builder-a449a.firebaseapp.com",
  projectId: "quote-builder-a449a",
  storageBucket: "quote-builder-a449a.appspot.com",
  messagingSenderId: "63088264846",
  appId: "1:63088264846:web:9d891b000ad18f73fe2bdf",
  measurementId: "G-X6CP8FFMQQ"
};

//initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

/*-----------Auth-----------*/
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
//SignIn with google
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//sign in with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('sign in user success', user)
      return user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error code', errorCode)
      console.log('error message', errorMessage)
      return errorCode
    });
};
//Create auth user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
//create user auth doc
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use')
      } else {
        console.log('error creating user', error.message)
        return error
      }
    }
  }
  return userSnapshot;
}
//sign out user
export const signOutUser = async () => await signOut(auth);
//getCurrentUser
export const getCurrentUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      return user
    } else {
      // User is signed out
      // ...
      console.log('user signed out firebase 69')
      return null;
    }
  });
};