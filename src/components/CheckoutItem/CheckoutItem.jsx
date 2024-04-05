import React, { useContext } from 'react'
import './CheckoutItem-styles.jsx'
import { CartContext } from '../../contexts/cart.context'
import { Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, Value } from './CheckoutItem-styles.jsx';

const CheckoutItem = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;
	const { addItemToCart, removeItemToCart, clearItem } = useContext(CartContext);

	const handleClearItem = () => clearItem(cartItem);
	const handleIncreaseCount = () => addItemToCart(cartItem);
	const handleDecreaseCount = () => removeItemToCart(cartItem);

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>

			<BaseSpan>{name}</BaseSpan>
			<Quantity>
				<Arrow onClick={handleDecreaseCount}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={handleIncreaseCount}>&#10095;</Arrow>
			</Quantity>
			<BaseSpan>{price}</BaseSpan>

			<RemoveButton onClick={handleClearItem}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem