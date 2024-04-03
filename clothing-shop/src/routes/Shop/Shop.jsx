import React, { useContext } from 'react'
import './Shop.scss'
import { CategoriesContext } from '../../contexts/categories.context';
import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category';

const Shop = () => {
	const { categoriesMap } = useContext(CategoriesContext);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />

		</Routes>
	);
};

export default Shop