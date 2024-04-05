import { createContext, useReducer, useState } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
	console.log(existingCartItem)
	if (existingCartItem) {
		return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
	}
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
	} else

		return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
};

const clearFromCart = (cartItems, productToClear) => {
	return cartItems.filter(cartItem => cartItem.id !== productToClear.id);
}

export const CartContext = createContext({
	isDropdownOpen: false,
	setDropdownOpen: () => { },
	cartItems: [],
	addItemToCart: () => { },
	cartCount: 0,
	removeItemToCart: () => { },
	clearItem: () => { },
	cartTotal: 0
});

const INITIAL_STATE = {
	isDropdownOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0
}

const CART_ACTION_TYPES = {
	SET_DROPDOWN_OPEN: 'SET_IS_CART_OPEN',
	SET_CART_ITEMS: 'SET_CART_ITEMS',
}

const cartReducer = (state, action) => {
	const { type, payload } = action;

	if (type === CART_ACTION_TYPES.SET_CART_ITEMS) {
		return {
			...state,
			...payload
		};
	} else if (type === CART_ACTION_TYPES.SET_IS_DROPDOWN_OPEN) {
		return {
			...state,
			isDropdownOpen: payload
		};
	}

	throw new Error(`Unhandled type of ${type} in cartReducer.`);
};

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const { cartItems, cartTotal, cartCount } = state;

	const updateCartItemsReducer = (newCartItems) => {
		const newItemsCount = newCartItems.reduce((sum, item) => sum + item.quantity, 0);

		const newCartTotal = newCartItems.reduce((sum, cartItem) => sum + (cartItem.quantity * cartItem.price), 0);

		dispatch(
			createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
				cartItems: newCartItems,
				cartTotal: newCartTotal,
				cartCount: newItemsCount
			}))
	};

	const addItemToCart = (productToAdd) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		updateCartItemsReducer(newCartItems);
	};

	const removeItemToCart = (productToRemove) => {
		const newCartItems = removeCartItem(cartItems, productToRemove);
		updateCartItemsReducer(newCartItems);
	};

	const clearItem = (productToClear) => {
		const newCartItems = clearFromCart(cartItems, productToClear);
		updateCartItemsReducer(newCartItems);
	};

	const value = {
		isDropdownOpen,
		setDropdownOpen,
		addItemToCart,
		cartItems,
		cartCount,
		removeItemToCart,
		clearItem,
		cartTotal
	};

	return (
		<CartContext.Provider value={value}>
			{children}
		</CartContext.Provider>
	);
};