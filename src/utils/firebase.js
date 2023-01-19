import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, updateDoc, serverTimestamp, deleteDoc } from 'firebase/firestore/lite';
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
};
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
  if (!auth.currentUser) return console.log("Not an authorized user");
  formData.firstName = formData.firstName[0].toUpperCase() + formData.firstName.slice(1).toLowerCase(); 
  formData.lastName = formData.lastName[0].toUpperCase() + formData.lastName.slice(1).toLowerCase(); 
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
};
//update client
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
  });
};
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
//delete client
export const deleteClient = async (currentUser, formData) => {
  if (!auth.currentUser) return;
  const clientDocRef = doc(db, 'companies', currentUser.company, 'clients', formData.email);
  return await deleteDoc(clientDocRef);
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
  const id = formData.id;
  const catalogDocRef = doc(db, 'companies', currentUser.company, 'catalogs', id);
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
        id
      });
    } catch (error) {
      console.log('error creating catalog')
    }
  }
  return catalogDocRef;
};
//add catalog item
export const addCatalogItem = async (currentUser, catalog, formData) => {
  if (!auth.currentUser) return console.log('Not authorized to add catalog items');
  if (currentUser.company !== catalog.company) return console.log('Not authorized to add catalog items');
  const id = catalog.id;
  const catalogDocRef = doc(db, 'companies', catalog.company, 'catalogs', id);
  const catalogSnapshot = await getDoc(catalogDocRef);
  const items = catalogSnapshot.data().items;
  console.log(items);
  if (catalogSnapshot.exists()) {
    await updateDoc(catalogDocRef, {
      updatedAt: serverTimestamp(),
      updatedBy: auth.currentUser.email,
      items: [...items, formData]
    })
  }
  return console.log('added item to catalog')
}
//delete catalog item
export const deleteCatalogItem = async (currentUser, catalog, item, index) => {
  if (!auth.currentUser) return console.log('Not authorized to add catalog items');
  if (currentUser.company !== catalog.company) return console.log('Not authorized to add catalog items');
  const id = catalog.id;
  const catalogDocRef = doc(db, 'companies', catalog.company, 'catalogs', id);
  const catalogSnapshot = await getDoc(catalogDocRef);
  const items = catalogSnapshot.data().items;
  items.splice(index, 1);
  if (catalogSnapshot.exists()) {
    await updateDoc(catalogDocRef, {
      updatedAt: serverTimestamp(),
      updatedBy: auth.currentUser.email,
      items,
    })
  }
  return console.log('added item to catalog')
}
//update catalog information
export const updateCatalog = async (formData) => {
  if (!auth.currentUser) return;
  const category = formData.category.toLowerCase();
  const catalogDocRef = doc(db, 'companies', formData.company, 'catalogs', formData.id);
  await updateDoc(catalogDocRef, {
    updatedAt: serverTimestamp(),
    category: category,
    name: formData.name,
    updatedBy: auth.currentUser.email,
  })
  return console.log('Update Catalog Successfull')
};
//delete catalog
export const deleteCatalog = async (formData) => {
  if (!auth.currentUser) return;
  const catalogDocRef = doc(db, 'companies', formData.company, 'catalogs', formData.id);
  await deleteDoc(catalogDocRef);
  return console.log('Delete Catalog Successfull')
};

/*---Quotes---*/
//get all quotes
export const getAllQuotes = async (user) => {
  if (!auth.currentUser) return console.log('not authorized');
  const quoteDocRef = await getDocs(collection(db, 'companies', user.company, 'quotes'))
  const quotes = []
  const otherQuotes = []
  quoteDocRef.forEach((doc) => {
    if (doc.data().salesperson === user.email) {
      quotes.push(doc.data());
    } else {
      otherQuotes.push(doc.data());
    }
  });
  return {quotes, otherQuotes};
};
//get quotes from client
export const getQuoteForClient = async (user, clientInfo) => {
  if (!auth.currentUser) return console.log('not authorized');
  const quoteDecRef = await getDocs(collection(db, 'companies', user.company, 'quotes'))
  const quotes = []
  const otherQuotes = []
  quoteDecRef.forEach((doc) => {
    if (doc.data().createdFor === clientInfo.email) {
      if (doc.data().salesperson === user.email) {
        quotes.push(doc.data());
      } else {
        otherQuotes.push(doc.data());
      }
    }
  });
  return {quotes, otherQuotes};
}
//add quote from salesperson
export const addQuoteFromSalesperson = async (currentUser, formData, cartCount, cartTotal, cartItems) => {
  if (!auth.currentUser) return console.log('No authorized user');
  console.log('add quote from salesperson');
  const id = formData.id;
  const quoteDocRef = doc(db, 'companies', currentUser.company, 'quotes', id);
  const quoteSnapshot = await getDoc(quoteDocRef);
  if (!quoteSnapshot.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(quoteDocRef, {
        createdAt,
        createdBy: currentUser.email,
        salesperson: currentUser.email,
        status: "active",
        cartTotal,
        cartCount,
        cartItems,
        createdFor: formData.recipientEmail,
        id,
      });
    } catch (error) {
      console.log('error creating quote from salesperson')
    }
  }
  return quoteDocRef;
}
//update quote from salesperson
export const updateQuoteFromSalesperson = async (currentUser, quote, cartCount, cartTotal, cartItems) => {
  if (!auth.currentUser) return console.log('No authorized user');
  console.log('update quote from salesperson')
  const id = quote.id;
  const quoteDocRef = doc(db, 'companies', currentUser.company, 'quotes', id);
  const quoteSnapshot = await getDoc(quoteDocRef);
  if (quoteSnapshot.exists()) {
    try {
      await updateDoc(quoteDocRef, {
        updatedAt: serverTimestamp(),
        updatedBy: currentUser.email,
        cartCount,
        cartTotal,
        cartItems,
      })
    } catch (error) {
      console.log('error updating quote from salesperson')
    }
  }
  return console.log('Update Quote Successfull')
};

/*---UserQuotes---*/
//get end user quotes
export const getUserQuotes = async () => {
  if (!auth.currentUser) return console.log("not an authorized user");
  const quoteDocRef = await getDocs(collection(db, 'users', auth.currentUser.uid, 'quotes'))
  const quotes = [];
  quoteDocRef.forEach((doc) => {
    quotes.push(doc.data());
  });
  return quotes;
}
//add quote from end user
export const addQuoteFromEndUser = async (currentUser, formData, cartItems, cartTotal, cartCount) => {
  if (!auth.currentUser) return console.log("not an authorized user");
  console.log('add quote from end user');
  console.log(formData)
  const id = formData.id;
  const quoteDocRef = doc(db, 'users', auth.currentUser.uid, 'quotes', id);
  const quoteSnapshot = await getDoc(quoteDocRef);
  if (!quoteSnapshot.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(quoteDocRef, {
        createdAt,
        createdBy: currentUser.email,
        salesperson: null,
        status: "active",
        cartTotal,
        cartCount,
        cartItems,
        id,
      });
    } catch (error) {
      console.log('error creating quote from end user')
    }
  }
}; 
//*******not working */update quote from end user
export const updateQuoteFromEndUser = async (currentUser, quote, cartCount, cartTotal, cartItems) => {
  if (!auth.currentUser) return console.log('No authorized user');
  console.log('update quote from salesperson')
  const id = quote.id;
  const quoteDocRef = doc(db, 'users', auth.currentUser.uid, 'quotes', id);
  const quoteSnapshot = await getDoc(quoteDocRef);
  if (quoteSnapshot.exists()) {
    try {
      await updateDoc(quoteDocRef, {
        updatedAt: serverTimestamp(),
        updatedBy: currentUser.email,
        cartCount,
        cartTotal,
        cartItems,
      })
    } catch (error) {
      console.log('error updating quote from end user')
    }
  }
  return console.log('Update Quote Successfull')
};