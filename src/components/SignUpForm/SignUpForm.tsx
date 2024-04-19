import { useState, FormEvent, ChangeEvent } from 'react'
import { AuthError, AuthErrorCodes } from 'firebase/auth'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { SignUpContainer } from './SignUp-styles';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: ''
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;
	const navigate = useNavigate();

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	}

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			const authResult = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			if (!authResult) {
				throw new Error('Authentication failed');
			}

			const { user } = authResult;
			if (!user) {
				throw new Error('User not found.')
			}

			await createUserDocFromAuth(user, { displayName });
			resetFormFields();
			navigate('/');
		} catch (error) {
			if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
				alert('Email already in use');
			} else {
				console.log('Error creating user: ' + (error as AuthError).message);
			}
		};
	};

	return (
		<SignUpContainer>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					name='displayName'
					type='text'
					value={displayName}
					required
					onChange={handleChange} />

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

				<FormInput
					label='Confirm Password'
					name='confirmPassword'
					value={confirmPassword}
					type='password'
					required
					onChange={handleChange} />

				<Button type='submit'>Sign up</Button>
			</form>
		</SignUpContainer>
	)
}

export default SignUpForm