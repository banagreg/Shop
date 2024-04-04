import React from 'react'
import { DirectoryContainer } from './Directory-styles.jsx'
import CategoryItem from '../CategoryItem/CategoryItem'

const Directory = ({ categories }) => {
	return (
		<DirectoryContainer>
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))};
		</DirectoryContainer>
	);
};

export default Directory