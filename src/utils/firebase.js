import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, updateDoc, serverTimestamp, deleteDoc, query, where, arrayUnion } from 'firebase/firestore/lite';
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
        role: "client",
        company: null,
        status: "active",
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
  if (!currentUser) return null;
  if (auth.currentUser !== currentUser) return console.log('User not logged in');
  const userSnapshot = await getDoc(doc(db, `users`, auth.currentUser.uid));
  if (userSnapshot.exists()) {
      return userSnapshot.data();
  } else {
    console.log('no data');
    return null
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
//get all clients
export const getAllClients = async (userCompany) => {
  console.log('get all clients');
  if (!auth.currentUser) return console.log('not authorized');
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where("company", "==", userCompany));
  const querySnapshop = await getDocs(q);
  const companyUsers = []
  querySnapshop.forEach((doc) => {
    companyUsers.push(doc.data());
  })
  return companyUsers;
};
//add client
export const addClient = async (currentUser, formData, uid) => {
  console.log('add client');
  if (!auth.currentUser) return console.log('not an authorized user');
  const userDocRef = doc(db, 'users', uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { firstName, lastName, email, institution, phoneNumber, salesperson, role } = formData;
    try {
      await setDoc(userDocRef, {
        firstName,
        lastName,
        institution,
        phoneNumber,
        salesperson,
        email,
        createdAt: serverTimestamp(),
        role,
        company: currentUser.company,
        status: "active",
      });
    } catch (error) {
      console.log('error creating user', error.message)
      return error
    }
  }
  return userSnapshot;
  
};

/*---Products---*/
//get products 
export const getAllProducts = async (userCompany) => {
  console.log('get all catalogs');
  if (!auth.currentUser) return console.log('not authorized');
  const productsDocsRef = await getDocs(collection(db, 'companies', userCompany, 'products'));
  const products = [];
  productsDocsRef.forEach((doc) => {
      products.push(doc.data());
  });
  return products;
  };
  //add product
export const addProduct = async (currentUser, formData) => {
  console.log('add product');
  if (!auth.currentUser) return console.log('user not authorized');
  const companyDocRef = doc(db, 'companies', currentUser.company);
  await updateDoc(companyDocRef, {
    categories: arrayUnion(formData.category),
    subCategories: arrayUnion(formData.subCategory),
    groups: arrayUnion(formData.group),
  });
  const productDocRef = doc(db, 'companies', currentUser.company, 'products', formData.sku);
  const productSnapshot = await getDoc(productDocRef);
  if (!productSnapshot.exists()) {
    try {
      await setDoc(productDocRef, {
        category: formData.category,
        createdAt: serverTimestamp(),
        createdBy: auth.currentUser.uid,
        description: formData.description,
        group: formData.group,
        name: formData.name,
        price: formData.price,
        sku: formData.sku,
        subCategory: formData.subCategory,
        status: "active",
      });
    } catch (error) {
      console.log('error creating product')
    };
  };
  return console.log('Product added succesfully');
};
//update product information 
export const updateProduct = async (currentUser, formData) => {
  console.log('update catalog');
  if (!auth.currentUser) return console.log('user not authorized');
  const companyDocRef = doc(db, 'companies', currentUser.company);
  await updateDoc(companyDocRef, {
    categories: arrayUnion(formData.category),
    subCategories: arrayUnion(formData.subCategory),
    groups: arrayUnion(formData.group),
  });
  const productDocRef = doc(db, 'companies', currentUser.company, 'products', formData.sku);
  const productSnapshot = await getDoc(productDocRef);
  if (productSnapshot.exists()) {
    await updateDoc(productDocRef, {
      category: formData.category,
      updatedAt: serverTimestamp(),
      updatedBy: auth.currentUser.email,
      description: formData.description,
      group: formData.group,
      name: formData.name,
      price: formData.price,
      subCategory: formData.subCategory,
    });
  };
  return console.log('Update Product Successfull')
};
//delete product 
export const deleteProduct = async (currentUser, formData) => {
  console.log('delete product');
  if (!auth.currentUser) return console.log('User not authorized');
  const productDocRef = doc(db, 'companies', currentUser.company, 'products', formData.sku);
  await deleteDoc(productDocRef);
  return console.log('Delete Product Successfull')
};
//get product categories 
export const getProductsCategories = async (currentUser) => {
  // if (!auth.currentUser) return console.log('not authorized to get product categories');
  const categoriesDocRef = doc(db, 'companies', currentUser.company);
  const categorySnapshot = await getDoc(categoriesDocRef);
  const { categories, subCategories, groups } = categorySnapshot.data();
  if (categorySnapshot) return {categories, subCategories, groups};
};
//add category, subcategory, or group
export const addCategoryToCompany = async (currentUser, formData) => {
  console.log('Add category, subcategory, group to company');
  if (!auth.currentUser) return console.log('user not authorized');
  const companyDocRef = doc(db, 'companies', currentUser.company);
  if (formData.category) await updateDoc(companyDocRef, {
    categories: arrayUnion(formData.category),
  });
  if (formData.subCategory) await updateDoc(companyDocRef, {
    subCategories: arrayUnion(formData.subCategory),
  });
  if (formData.group) await updateDoc(companyDocRef, {
    groups: arrayUnion(formData.group),
  });
  return companyDocRef;
}
/*---Quotes---*/
//get all quotes **
export const getAllQuotes = async (user) => {
  console.log('get all quotes');
  // if (!auth.currentUser) return console.log('not authorized');
  // const quoteDocRef = await getDocs(collection(db, 'companies', user.company, 'quotes'))
  // const quotes = []
  // const otherQuotes = []
  // quoteDocRef.forEach((doc) => {
  //   if (doc.data().salesperson === user.email) {
  //     quotes.push(doc.data());
  //   } else {
  //     otherQuotes.push(doc.data());
  //   }
  // });
  // return {quotes, otherQuotes};
};
//get quotes from client **
export const getQuoteForClient = async (user, clientInfo) => {
  return console.log('get quote for client');
  // if (!auth.currentUser) return console.log('not authorized');
  // const quoteDecRef = await getDocs(collection(db, 'companies', user.company, 'quotes'))
  // const quotes = []
  // const otherQuotes = []
  // quoteDecRef.forEach((doc) => {
  //   if (doc.data().createdFor === clientInfo.email) {
  //     if (doc.data().salesperson === user.email) {
  //       quotes.push(doc.data());
  //     } else {
  //       otherQuotes.push(doc.data());
  //     }
  //   }
  // });
  // return {quotes, otherQuotes};
}
//add quote from salesperson **
export const addQuoteFromSalesperson = async (currentUser, formData, cartCount, cartTotal, cartItems) => {
  return console.log('add quote from salesperson');
  // if (!auth.currentUser) return console.log('No authorized user');
  // console.log('add quote from salesperson');
  // const id = formData.id;
  // const quoteDocRef = doc(db, 'companies', currentUser.company, 'quotes', id);
  // const quoteSnapshot = await getDoc(quoteDocRef);
  // if (!quoteSnapshot.exists()) {
  //   const createdAt = new Date();
  //   try {
  //     await setDoc(quoteDocRef, {
  //       createdAt,
  //       createdBy: currentUser.email,
  //       salesperson: currentUser.email,
  //       status: "active",
  //       cartTotal,
  //       cartCount,
  //       cartItems,
  //       createdFor: formData.recipientEmail,
  //       id,
  //     });
  //   } catch (error) {
  //     console.log('error creating quote from salesperson')
  //   }
  // }
  // return quoteDocRef;
}
//update quote from salesperson **
export const updateQuoteFromSalesperson = async (currentUser, quote, cartCount, cartTotal, cartItems) => {
  return console.log('updatequote from salesperson');
  // if (!auth.currentUser) return console.log('No authorized user');
  // console.log('update quote from salesperson')
  // const id = quote.id;
  // const quoteDocRef = doc(db, 'companies', currentUser.company, 'quotes', id);
  // const quoteSnapshot = await getDoc(quoteDocRef);
  // if (quoteSnapshot.exists()) {
  //   try {
  //     await updateDoc(quoteDocRef, {
  //       updatedAt: serverTimestamp(),
  //       updatedBy: currentUser.email,
  //       cartCount,
  //       cartTotal,
  //       cartItems,
  //     })
  //   } catch (error) {
  //     console.log('error updating quote from salesperson')
  //   }
  // }
  // return console.log('Update Quote Successfull')
};

/*---UserQuotes---*/
//get end user quotes **
export const getUserQuotes = async () => {
  console.log('get user quotes');
  // if (!auth.currentUser) return console.log("not an authorized user");
  // const quoteDocRef = await getDocs(collection(db, 'users', auth.currentUser.uid, 'quotes'))
  // const quotes = [];
  // quoteDocRef.forEach((doc) => {
  //   quotes.push(doc.data());
  // });
  // return quotes;
}
//add quote from end user **
export const addQuoteFromEndUser = async (currentUser, formData, cartItems, cartTotal, cartCount) => {
  return console.log('add quote from end user');
  // if (!auth.currentUser) return console.log("not an authorized user");
  // console.log('add quote from end user');
  // console.log(formData)
  // const id = formData.id;
  // const quoteDocRef = doc(db, 'users', auth.currentUser.uid, 'quotes', id);
  // const quoteSnapshot = await getDoc(quoteDocRef);
  // if (!quoteSnapshot.exists()) {
  //   const createdAt = new Date();
  //   try {
  //     await setDoc(quoteDocRef, {
  //       createdAt,
  //       createdBy: currentUser.email,
  //       salesperson: null,
  //       status: "active",
  //       cartTotal,
  //       cartCount,
  //       cartItems,
  //       id,
  //     });
  //   } catch (error) {
  //     console.log('error creating quote from end user')
  //   }
  // }
}; 
//update quote from end user **
export const updateQuoteFromEndUser = async (currentUser, quote, cartCount, cartTotal, cartItems) => {
  return console.log('update quote from end user');
  // if (!auth.currentUser) return console.log('No authorized user');
  // console.log('update quote from salesperson')
  // const id = quote.id;
  // const quoteDocRef = doc(db, 'users', auth.currentUser.uid, 'quotes', id);
  // const quoteSnapshot = await getDoc(quoteDocRef);
  // if (quoteSnapshot.exists()) {
  //   try {
  //     await updateDoc(quoteDocRef, {
  //       updatedAt: serverTimestamp(),
  //       updatedBy: currentUser.email,
  //       cartCount,
  //       cartTotal,
  //       cartItems,
  //     })
  //   } catch (error) {
  //     console.log('error updating quote from end user')
  //   }
  // }
  // return console.log('Update Quote Successfull')
};