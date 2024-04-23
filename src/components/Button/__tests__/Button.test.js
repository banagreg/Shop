import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Button from '../Button'
import { BUTTON_TYPE_CLASSES } from '../../../constants/constants';

describe('Button component', () => {
	test('Should render Base button when nothing is passed', () => {
		render(<Button />);

		expect(screen.getByRole('button')).toHaveStyleRule('background-color', 'black')
	});

	test('Should render Google button when passed google button type', () => {
		render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);

		expect(screen.getByRole('button')).toHaveStyleRule('background-color', '#4285f4')
	});

	test('Should render Inverted button when passed inverted button type', () => {
		render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);

		expect(screen.getByRole('button')).toHaveStyleRule('background-color', 'white')
	})

	test('Should be disabled if isLoading is true', () => {
		render(<Button isLoading={true} />);

		expect(screen.getByRole('button')).toBeDisabled();
	})
});