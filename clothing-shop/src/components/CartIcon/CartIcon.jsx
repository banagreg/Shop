import React, { useContext } from 'react'
import { CartIconContainer, ShoppingIcon, ItemCount } from './CartIcon-styles.jsx'
import { CartContext } from '../../contexts/cart.context'

const CartIcon = () => {
	const { setDropdownOpen } = useContext(CartContext);
	const { cartCount } = useContext(CartContext);

	const toggleDropdown = () => {
		setDropdownOpen(prevState => !prevState);
	}

	return (
		<CartIconContainer onClick={toggleDropdown}>
			<ShoppingIcon />
			<ItemCount as='span'>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon