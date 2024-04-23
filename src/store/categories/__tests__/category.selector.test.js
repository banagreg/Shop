import { selectCategories, selectCategoriesMap } from "../category.selector"

const mockState = {
	categories: {
		categories: [
			{ title: 'Category 1', items: ['Item 1', 'Item 2'] },
			{ title: 'Category 2', items: ['Item 3', 'Item 4'] },
		]
	}
};

describe('Category selector test', () => {
	test('selectCategories should select categories from state', () => {
		const selectedCategories = selectCategories(mockState);
		expect(selectedCategories).toEqual([
			{ title: 'Category 1', items: ['Item 1', 'Item 2'] },
			{ title: 'Category 2', items: ['Item 3', 'Item 4'] },
		]);
	});

	test('selectCategoriesMap should select categories map from state', () => {
		const selectedCategoriesMap = selectCategoriesMap(mockState);
		expect(selectedCategoriesMap).toEqual({
			'category 1': ['Item 1', 'Item 2'],
			'category 2': ['Item 3', 'Item 4'],
		});
	});
});