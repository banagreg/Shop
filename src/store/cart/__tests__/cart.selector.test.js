import { selectCartCount, selectCartItems, selectIsCartOpen, selectCartTotal } from "../cart.selector"

const mockState = {
	cart: {
		isCartOpen: false,
		cartItems: [
			{
				id: 1,
				imageUrl: 'test',
				name: 'Item 1',
				price: 10,
				quantity: 1
			},
			{
				id: 2,
				imageUrl: 'test',
				name: 'Item 2',
				price: 5,
				quantity: 1
			}
			,
		],
	},
}

describe('Cart selectors test', () => {
	test('selectCartCount return the total count of items in the cart', () => {
		expect(selectCartCount(mockState)).toBe(2);
	});

	test('selectCartItems return the cart items in the cart', () => {
		expect(selectCartItems(mockState)).toEqual([
			{
				id: 1,
				imageUrl: 'test',
				name: 'Item 1',
				price: 10,
				quantity: 1
			},
			{
				id: 2,
				imageUrl: 'test',
				name: 'Item 2',
				price: 5,
				quantity: 1
			}
		]);
	});

	test('selectIsCartOpen shot return true if the cart is open', () => {
		expect(selectIsCartOpen(mockState)).toBe(false);
	});

	test('selectCartTotal should return the total price of the cart', () => {
		expect(selectCartTotal(mockState)).toBe(15);
	});
})