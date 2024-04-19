import { FC } from 'react';
import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from './Button-styles'
import { BUTTON_TYPE_CLASSES } from '../../constants/constants'
import { ButtonProps } from '../../types/types';

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton => (
	{
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
		[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
	}[buttonType]
);

const Button: FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps }) => {
	const CustomButton = getButton(buttonType)
	return (
		<CustomButton disabled={isLoading} {...otherProps}>
			{isLoading ? <ButtonSpinner /> : children}
		</CustomButton>
	);
};

export default Button;