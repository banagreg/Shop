import React, { useContext } from 'react'
import './CheckoutItem.scss'
import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;
	const { addItemToCart, removeItemToCart, clearItem } = useContext(CartContext);

	const handleClearItem = () => clearItem(cartItem);
	const handleIncreaseCount = () => addItemToCart(cartItem);
	const handleDecreaseCount = () => removeItemToCart(cartItem);

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className='name'>{name}</span>

			<span className='quantity' >
				<div onClick={handleDecreaseCount} className='arrow'>&#10094;</div>
				<span className='value'>{quantity}</span>
				<div onClick={handleIncreaseCount} className='arrow'>&#10095;</div>
			</span>
			<span className='price'>{price}</span>

			<div onClick={handleClearItem} className='remove-button'>&#10005;</div>
		</div>
	);
};

export default CheckoutItem