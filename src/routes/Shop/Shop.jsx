import React, { useEffect } from 'react'
import './Shop.scss'
import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux'

const Shop = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesArray = await getCategoriesAndDocuments('categories');
			dispatch(setCategories(categoriesArray));
		}

		getCategoriesMap();
	}, [])

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	);
};

export default Shop