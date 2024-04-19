import { FormInputLabel, Group, Input } from './FormInput-styles';
import { FC } from 'react';
import { FormInputProps } from '../../types/types';


const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
	return (
		<Group>
			<Input {...otherProps} />
			{label && (
				<FormInputLabel shrink={Boolean(otherProps.value && typeof otherProps.value === 'string' && otherProps.value.length)}>
					{label}
				</FormInputLabel>)}
		</Group>
	);
};

export default FormInput;