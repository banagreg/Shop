import { screen } from "@testing-library/react"
import Navigation from "../Navigation"
import { renderWithProviders } from "../../../utils/test/test.utils"

describe('Navigation tests', () => {
	test('Should render Sign In link if the user is not signed in', () => {
		renderWithProviders(<Navigation />, {
			preloadedState: {
				user: {
					currentUser: null,
				}
			}
		});

		const signInLinkElement = screen.getByText(/sign in/i);
		expect(signInLinkElement).toBeInTheDocument();
	});

	test('Should render Sign Out link if the user is signed in', () => {
		renderWithProviders(<Navigation />, {
			preloadedState: {
				user: {
					currentUser: {},
				}
			}
		});

		const signInLinkElement = screen.queryByText(/sign in/i);
		expect(signInLinkElement).toBeNull();

		const signOutLinkElement = screen.getByText(/sign out/i);
		expect(signOutLinkElement).toBeInTheDocument();
	});

	test('Should not render cart dropdown if isCartOpen is false', () => {
		renderWithProviders(<Navigation />, {
			preloadedState: {
				cart: {
					isCartOpen: false,
					cartItems: [],
				}
			}
		});

		const dropdownTextElement = screen.queryByText(/your cart is empty/i);
		expect(dropdownTextElement).toBeNull();
	});

	test('Should render cart dropdown if isCartOpen is true', () => {
		renderWithProviders(<Navigation />, {
			preloadedState: {
				cart: {
					isCartOpen: true,
					cartItems: [],
				}
			}
		});

		const dropdownTextElement = screen.getByText(/your cart is empty/i);
		expect(dropdownTextElement).toBeInTheDocument();
	});

})