import { createSelector } from 'reselect'

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cart) => cart.cartItems
);

export const selectIsDropdownOpen = createSelector(
	[selectCartReducer],
	(cart) => cart.isDropdownOpen
)

export const selectCartCount = createSelector(
	[selectCartItems],
	(cartItems) => cartItems.reduce((sum, item) => sum + item.quantity, 0)
);

export const selectCartTotal = createSelector(
	[selectCartItems],
	(cartItems) => cartItems.reduce((sum, cartItem) => sum + (cartItem.quantity * cartItem.price), 0)
);