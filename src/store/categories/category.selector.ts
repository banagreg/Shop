import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';
import { Category } from '../../types/types';

const selectCategoryReducer = (state: RootState) => state.categories;

export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories) =>
		categories.reduce((acc: { [key: string]: any }, category: Category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {})
);
