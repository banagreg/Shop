import { useState, FormEvent, ChangeEvent } from 'react'
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { BUTTON_TYPE_CLASSES } from '../../constants/constants';
import { ButtonsContainer, SignInContainer } from './SignInForm-styles';
import {
	signInUserWithEmailAndPassword,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import { AuthError, AuthErrorCodes } from 'firebase/auth'
import { useNavigate } from "react-router-dom";


const defaultFormFields = {
	email: '',
	password: ''
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;
	const navigate = useNavigate();

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
		navigate('/');
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			await signInUserWithEmailAndPassword(email, password);
			resetFormFields();
			navigate('/');
		} catch (error) {
			switch ((error as AuthError).code) {
				case AuthErrorCodes.INVALID_PASSWORD:
					alert('Incorrect password'); break;
				case AuthErrorCodes.USER_MISMATCH:
				case AuthErrorCodes.USER_DELETED:
					alert('User not found'); break;
				default:
					console.log((error as AuthError).message)
			};
		};
	};

	return (
		<SignInContainer>
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

				<ButtonsContainer>
					<Button type='submit'>Sign in</Button>
					<Button
						type='button'
						onClick={signInWithGoogle}
						buttonType={BUTTON_TYPE_CLASSES.google}>Google sign in</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm