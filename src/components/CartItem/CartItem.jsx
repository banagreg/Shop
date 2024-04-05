import React from 'react'
import { CartItemContainer, ItemDetails } from './CartItem-styles.jsx';

const CartItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	return (
		<CartItemContainer>
			<img src={imageUrl} alt={name} />
			<ItemDetails>
				<span className='name'>{name}</span>
				<span className='quantity'>{quantity} x ${price}</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem