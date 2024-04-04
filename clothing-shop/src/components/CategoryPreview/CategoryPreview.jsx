import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import { CategoryPreviewContainer, Preview } from './CategoryPreview-styles.jsx'

const CategoryPreview = ({ title, products }) => {
	return (
		<CategoryPreviewContainer>
			<h2>
				<Link to={title} className='title'> {title.toUpperCase()} </Link>
			</h2>
			<Preview>
				{
					products.filter((_, index) => index < 4)
						.map(product => (
							<ProductCard key={product.id} product={product} />
						))
				}
			</Preview>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview