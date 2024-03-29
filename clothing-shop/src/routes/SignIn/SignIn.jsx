import React from 'react'
import './SignIn.scss'
import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase.utils'

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


		</div>
	);
};

export default SignIn