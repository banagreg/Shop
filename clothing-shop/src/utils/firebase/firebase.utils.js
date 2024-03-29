import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider
} from 'firebase/auth';
import {
	doc,
	getFireStore,
	getDoc,
	setDoc,
	getFirestore
} from 'firebase/firestore'

import { FIREBASE_API_KEY } from '../../constants/private';

const firebaseConfig = {
	apiKey: FIREBASE_API_KEY,
	authDomain: "crown-db-c9b21.firebaseapp.com",
	projectId: "crown-db-c9b21",
	storageBucket: "crown-db-c9b21.appspot.com",
	messagingSenderId: "413247630296",
	appId: "1:413247630296:web:5f40363fe4b5dae486a0ad"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
	// doc takes (db, collection, identifier=uid)
	const userDocRef = doc(db, 'users', userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt
			});
		} catch (err) {
			console.log('error creating the user', err.message);
		}
	}

	return userDocRef;


}