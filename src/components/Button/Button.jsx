import React from 'react'
import { BaseButton, GoogleSignInButton, InvertedButton } from './Button-styles.jsx'
import { BUTTON_TYPE_CLASSES } from '../../constants/constants.js'

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
	{
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
		[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
	}[buttonType]
);

const Button = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = getButton(buttonType)
	return (
		<CustomButton {...otherProps}>
			{children}
		</CustomButton>
	);
};

export default Button;