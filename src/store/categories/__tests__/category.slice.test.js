import { categoriesReducer, CATEGORIES_INITIAL_STATE, setCategories } from "../category.slice"

describe('Category slice test', () => {
	test('Should setCategories properly', () => {
		const mockCategories = [{
			title: 'Category 1',
			items: [{
				id: 1,
				name: 'Product 1',
			}]
		},
		{
			title: 'Category 2',
			items: [{
				id: 2,
				name: 'Product 2',
			}]
		}];

		const action = setCategories(mockCategories);
		const newState = categoriesReducer(CATEGORIES_INITIAL_STATE, action);

		expect(newState.categories).toEqual(mockCategories)
	});
})