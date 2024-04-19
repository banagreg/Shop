import { useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard/ProductCard'
import { CategoryContainer, CategoryTitle } from './Category-styles'
import { selectCategoriesMap } from '../../store/categories/category.selector'
import { CategoryItem, CategoryRouteParams } from '../../types/types'

const Category = () => {
	const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
	const categoriesMap = useSelector(selectCategoriesMap);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category])
	}, [category, categoriesMap])

	return (
		<>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>
			<CategoryContainer>
				{
					products && products.map((product: CategoryItem) => (
						<ProductCard key={product.id} product={product} />
					))
				}
			</CategoryContainer>
		</>
	);
};

export default Category