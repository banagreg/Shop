import { createContext, useEffect, useState } from "react";

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

export const CartProvider = ({ children }) => {
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		const itemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
		setCartCount(itemsCount)
	}, [cartItems])

	useEffect(() => {
		const total = cartItems.reduce((sum, cartItem) => sum + (cartItem.quantity * cartItem.price), 0);
		setCartTotal(total);
	}, [cartItems])

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd))
	};

	const removeItemToCart = (productToRemove) => {
		setCartItems(removeCartItem(cartItems, productToRemove))
	}

	const clearItem = (productToClear) => {
		setCartItems(clearFromCart(cartItems, productToClear))
	}

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