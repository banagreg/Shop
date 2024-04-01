import React from 'react'
import './SignIn.scss'
import { useEffect } from 'react';
import {
	auth,
	signInWithGooglePopup,
	createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils'
import SignUp from '../../components/SignUp/SignUp';

const SignIn = () => {

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocFromAuth(user);
	}

	return (
		<div>
			<h1>SignIn page</h1>
			<button onClick={logGoogleUser}>
				Sign in with Google popup
			</button>
			<SignUp />
		</div>
	);
};

export default SignIn