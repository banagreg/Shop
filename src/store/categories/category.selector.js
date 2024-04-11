import { createSelector } from 'reselect'

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.categories //it will run only if we get a different result from selectCategoryReducer
);

export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories) => categories.reduce((acc, category) => {
		const { title, items } = category;
		acc[title.toLowerCase()] = items;
		return acc;
	}, {})
);

export const selectCategoryIsLoading = createSelector([selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.isLoading
);