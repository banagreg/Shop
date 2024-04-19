import React from 'react'
import { BackgroundImage, Body, CategoryItemContainer } from './CategoryItem-styles'
import { useNavigate } from 'react-router-dom';
import { CategoryProps } from '../../types/types';

const CategoryItem = ({ category }: CategoryProps) => {
	const { imageUrl, title } = category;
	const navigate = useNavigate();

	const onNavigateHandler = () => {
		navigate(`/shop/${category.title}`)
	};

	return (
		<CategoryItemContainer onClick={onNavigateHandler}>
			<BackgroundImage imageurl={imageUrl}
			/>
			<Body>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</CategoryItemContainer>
	);
};

export default CategoryItem