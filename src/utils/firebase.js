import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, updateDoc, serverTimestamp } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';

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
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
//Create auth user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
//create user auth doc
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if (!userAuth) return;
  console.log('userdoc creation')
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
        role: "client",
        company: null,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating user', error.message)
      return error
    }
  }
  return userSnapshot;
}
//sign out user
export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
//getCurrentUser
export const getUserInfo = async (currentUser) => {
    if (auth.currentUser !== currentUser) return 'User not logged in';
    const userSnapshot = await getDoc(doc(db, `users`, auth.currentUser.uid));
    if (userSnapshot.exists()) {
        return userSnapshot.data();
    } else {
        console.log('no data');
    };
};
//send password reset email
export const sendPasswordReset = async (email) => {
  return new Promise((resolve, reject) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        resolve(true);
        console.log('password send worked')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error, errorCode, errorMessage);
        console.log('code', errorCode);
        console.log('message', errorMessage);
        return resolve(errorCode)
      })
  });
};

/*-----------Storage-----------*/
//upload product
// export const uploadProduct = async (formData) => {
  //   //look to see if document already exists
  //   const existsRef = await getDoc(doc(firestore, ''))
  // }

/*-----------Database-----------*/
/*---Clients---*/
//add client
export const addClient = async (userCompany, formData) => {
  if (!auth.currentUser) return;
  const clientDocRef = doc(db, 'companies', userCompany, 'clients', formData.email);
  const clientSnapshot = await getDoc(clientDocRef);
  if (!clientSnapshot.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(clientDocRef, {
        createdAt,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        institution: formData.institution,
        salesperson: formData.salesperson,
        status: "active",
      })
    } catch (error) {
      console.log('error creating client')
    }
  }
  return clientSnapshot;
}
//edit client
export const updateClient = async (formData) => {
  if (!auth.currentUser) return;
  const clientDocRef = doc(db, 'companies', formData.institution, 'clients', formData.email);
  await updateDoc(clientDocRef, {
    updatedAt: serverTimestamp(),
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    institution: formData.institution,
    salesperson: formData.salesperson,
  })
}
//get clients
export const getAllClients = async (userCompany) => {
  if (!auth.currentUser) return console.log('not authorized');
  const clientDocRef = await getDocs(collection(db, 'companies', userCompany, 'clients'))
  const clients = []
  clientDocRef.forEach((doc) => {
    clients.push(doc.data());
  });
  return clients;
};
/*---Catalogs---*/
//get catalogs
export const getAllCatalogs = async (userCompany) => {
  if (!auth.currentUser) return console.log('not authorized');
  const catalogDocRef = await getDocs(collection(db, 'companies', userCompany, 'catalogs'))
  const catalogs = []
  catalogDocRef.forEach((doc) => {
    catalogs.push(doc.data());
  });
  return catalogs;
};
//add catalog
export const addCatalog = async (currentUser, formData) => {
  if (!auth.currentUser) return;
  const category = formData.category.toLowerCase();
  const catalogDocRef = doc(db, 'companies', currentUser.company, 'catalogs', category);
  const catalogSnapshot = await getDoc(catalogDocRef);
  if (!catalogSnapshot.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(catalogDocRef, {
        createdAt,
        company: formData.company,
        category: category,
        name: formData.name,
        createdBy: currentUser.email,
        status: "active",
        items: [],
      })
    } catch (error) {
      console.log('error creating catalog')
    }
  }
  return catalogSnapshot;
}
