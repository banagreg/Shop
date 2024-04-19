import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import { CategoryPreviewContainer, Preview } from './CategoryPreview-styles'
import { Category } from '../../types/types';

const CategoryPreview = ({ title, items }: Category) => {
	return (
		<CategoryPreviewContainer>
			<h2>
				<Link to={title} className='title'> {title.toUpperCase()} </Link>
			</h2>
			<Preview>
				{
					items.filter((_, index) => index < 4)
						.map(product => (
							<ProductCard key={product.id} product={product} />
						))
				}
			</Preview>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview