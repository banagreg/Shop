import { createContext, useState, useEffect } from "react";
import { createUserDocFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import PRODUCTS from '../constants/shop-data.json'

//as the actual value i want to access
export const ProductsContext = createContext({
	products: [],
});

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(PRODUCTS);
	const value = { products };

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};