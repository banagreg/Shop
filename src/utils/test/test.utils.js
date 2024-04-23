import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../../store/root-reducer'
import { BrowserRouter } from 'react-router-dom'

export function renderWithProviders(ui, {
	preloadedState = {},
	store = configureStore({
		reducer: rootReducer,
		preloadedState: preloadedState,
	}),
	...renderOptions
} = {}) {
	const Wrapper = ({ children }) => {
		return (
			<Provider store={store}>
				<BrowserRouter>
					{children}
				</BrowserRouter>
			</Provider>
		);
	};

	return {
		store,
		...render(ui, { wrapper: Wrapper, ...renderOptions }),
	};
}
