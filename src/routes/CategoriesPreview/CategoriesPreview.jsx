import React from 'react'
import { selectCategoriesMap, selectCategoryIsLoading } from '../../store/categories/category.selector';
import { useSelector } from 'react-redux'
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview'
import Spinner from '../../components/Spinner/Spinner'

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	const categoryIsLoading = useSelector(selectCategoryIsLoading);

	return (
		<>
			{
				categoryIsLoading ? (<Spinner />) : (Object.keys(categoriesMap).map(title => {
					const products = categoriesMap[title];
					return <CategoryPreview key={title} title={title} products={products} />;
				}))
			};
		</>
	);
};

export default CategoriesPreview