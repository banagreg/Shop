import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../../types/types';

type CartState = {
	isCartOpen: boolean;
	cartItems: CartItem[];
};
const CART_INITIAL_STATE: CartState = {
	isCartOpen: false,
	cartItems: [],
};

const addCartItem = (cartItems: CartItem[], productToAdd: CartItem) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
	// find the cart item to remove
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	if (!existingCartItem) return cartItems;

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem) =>
	cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const cartSlice = createSlice({
	name: 'cart',
	initialState: CART_INITIAL_STATE,
	reducers: {
		addItemToCart(state, action) {
			state.cartItems = addCartItem(state.cartItems, action.payload);
		},
		removeItemFromCart(state, action) {
			state.cartItems = removeCartItem(state.cartItems, action.payload);
		},
		clearItemFromCart(state, action) {
			state.cartItems = clearCartItem(state.cartItems, action.payload);
		},
		setCartItems(state, action) {
			state.cartItems = action.payload;
		},
		setIsCartOpen(state, action) {
			state.isCartOpen = action.payload;
		},
	},
});

export const {
	setCartItems,
	setIsCartOpen,
	addItemToCart,
	clearItemFromCart,
	removeItemFromCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
