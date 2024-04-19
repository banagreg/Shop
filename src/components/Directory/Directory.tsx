import React from 'react'
import { DirectoryContainer } from './Directory-styles'
import CategoryItem from '../CategoryItem/CategoryItem'
import { DirectoryProps } from '../../types/types';

const Directory = ({ categories }: DirectoryProps) => {
	return (
		<DirectoryContainer>
			{categories.map((category) => (
				<CategoryItem key={category.title} category={category} />
			))};
		</DirectoryContainer>
	);
};

export default Directory