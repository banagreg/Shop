import { screen } from "@testing-library/react";
import Category from "../Category";
import { renderWithProviders } from "../../../utils/test/test.utils";

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: () => ({
		category: 'hats'
	})
}))

describe("Category tests", () => {
	test('Should render products if there are items present', () => {
		renderWithProviders(<Category />, {
			preloadedState: {
				categories: {
					categories: [
						{
							title: 'hats',
							items: [
								{ id: 1, name: 'Product 1' },
								{ id: 2, name: 'Product 2' },
								{ id: 3, name: 'Product 3' }
							]
						}
					]
				}
			}
		});

		const productElement = screen.getByText(/product 1/i);
		expect(productElement).toBeInTheDocument();
	})
})