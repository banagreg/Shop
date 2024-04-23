import { screen } from "@testing-library/react"
import { renderWithProviders } from "../../../utils/test/test.utils"
import CartIcon from "../CartIcon"

describe('CartIcon tests', () => {
	test('Uses preloaded state to render', () => {
		const initialCartItems = [{
			id: 1,
			name: 'Item A',
			imageUrl: 'test',
			price: 10,
			quantity: 1
		},
		{
			id: 2,
			name: 'Item B',
			imageUrl: 'test',
			price: 15,
			quantity: 3
		}];

		renderWithProviders(<CartIcon />, {
			preloadedState: {
				cart: {
					cartItems: initialCartItems
				}
			}
		});

		const cartIconElement = screen.getByText('4');
		expect(cartIconElement).toBeInTheDocument();
	})
})