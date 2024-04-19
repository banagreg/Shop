import { selectCategoriesMap } from '../../store/categories/category.selector'
import { useSelector } from 'react-redux'
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview'

const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);

	return (
		<>
			{
				Object.keys(categoriesMap).map(title => {
					const products = categoriesMap[title];
					return <CategoryPreview key={title} title={title} items={products} />;
				})
			}
		</>
	);
};

export default CategoriesPreview