
import { cartReducer, addItemToCart, removeItemFromCart, clearItemFromCart, CART_INITIAL_STATE } from "../cart.slice";

const mockItem = { id: 1, name: 'Product 1', quantity: 2 };

describe('Cart slice test', () => {
	test('Should handle addItemToCart', () => {
		const action = addItemToCart(mockItem);
		const newState = cartReducer(CART_INITIAL_STATE, action);
		expect(newState.cartItems).toEqual([{ ...mockItem, quantity: 1 }]);
	});

	test('Should handle removeItemFromCart', () => {
		const action = removeItemFromCart(mockItem);
		const currentState = { ...CART_INITIAL_STATE, cartItems: [mockItem] };
		const newState = cartReducer(currentState, action);
		expect(newState.cartItems).toEqual([{ ...mockItem, quantity: 1 }])
	});

	test('Should handle clearItemFromCart', () => {
		const action = clearItemFromCart(mockItem);
		const currentState = { ...CART_INITIAL_STATE, cartItems: [mockItem] };

		const newState = cartReducer(currentState, action);
		expect(newState.cartItems).toEqual([])
	});
})