import { screen, fireEvent } from "@testing-library/react"
import { renderWithProviders } from "../../../utils/test/test.utils"
import ProductCard from "../ProductCard"

describe('ProductCard tests', () => {
	test('Should add the product item when Product Card button is clicked', async () => {
		const mockProduct = {
			id: 1,
			imageUrl: 'test',
			name: 'Item A',
			price: 10
		}
		const { store } = renderWithProviders(<ProductCard product={mockProduct} />, {
			preloadedState: {
				cart: {
					cartItems: []
				}
			}
		})

		const addToCartBtnElement = screen.getByText(/add to card/i);
		await fireEvent.click(addToCartBtnElement);

		expect(store.getState().cart.cartItems.length).toBe(1);
	});
})