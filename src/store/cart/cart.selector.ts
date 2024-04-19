import { createSelector } from 'reselect';
import { CartItem } from '../../types/types';
import { RootState } from '../root-reducer';

const selectCartReducer = (state: RootState) => state.cart;

export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cart) => cart.cartItems
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(total: number, cartItem: CartItem) =>
			total + cartItem.quantity * cartItem.price,
		0
	)
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(total: number, cartItem: CartItem) => total + cartItem.quantity,
		0
	)
);
