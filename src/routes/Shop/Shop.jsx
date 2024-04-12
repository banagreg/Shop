import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category';
import { setCategories } from '../../store/categories/category.slice';
import { useDispatch } from 'react-redux'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

const Shop = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesArray = await getCategoriesAndDocuments('categories');
			dispatch(setCategories(categoriesArray));
		};

		getCategoriesMap();
	}, []);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	);
};

export default Shop