import React, { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './CartIcon.scss'
import Shop from '../../routes/Shop/Shop'
import { CartContext } from '../../contexts/cart.context'
const CartIcon = () => {
	const { setDropdownOpen } = useContext(CartContext);
	const { cartCount } = useContext(CartContext);

	const toggleDropdown = () => {
		setDropdownOpen(prevState => !prevState);
	}

	return (
		<div className='cart-icon-container' onClick={toggleDropdown}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{cartCount}</span>
		</div>
	)
}

export default CartIcon