import React, { useState } from 'react'
import {
	signInUserWithEmailAndPassword,
	signInWithGooglePopup
} from '../../utils/firebase/firebase.utils';
import FormInput from '../FormInput/FormInput';
import './SignInForm.scss'
import Button from '../Button/Button';

const defaultFormFields = {
	email: '',
	password: ''
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	}

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	}

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	}

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInUserWithEmailAndPassword(email, password);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('Incorrect password'); break;
				case 'auth/user-not-found':
					alert('User not found'); break;
				default:
					console.log(error.message)
			};
		};
	};

	return (
		<div className='sign-up-container'>
			<h2>Already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					name='email'
					type='email'
					value={email}
					required
					onChange={handleChange} />

				<FormInput
					label='Password'
					name='password'
					value={password}
					type='password'
					required
					onChange={handleChange} />

				<div className='buttons-container'>
					<Button type='submit'>Sign in</Button>
					<Button
						type='button'
						onClick={signInWithGoogle}
						buttonType='google'>Google sign in</Button>
				</div>
			</form>
		</div>
	)
}

export default SignInForm