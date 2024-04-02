import { createContext, useState } from "react";

export const CartContext = createContext({
	isDropdownOpen: false,
	setDropdownOpen: () => { }
});

export const CartProvider = ({ children }) => {
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const value = { isDropdownOpen, setDropdownOpen };

	return (
		<CartContext.Provider value={value}>
			{children}
		</CartContext.Provider>
	);
};