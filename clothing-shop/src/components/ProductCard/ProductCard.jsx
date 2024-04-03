import React, { useContext } from 'react'
import Button from '../Button/Button'
import './ProductCard.scss'
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addToCart = () => addItemToCart(product);

	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={`${name}`} />
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>${price}</span>
			</div>
			<Button onClick={addToCart} buttonType='inverted'>Add to cart</Button>
		</div>
	);
};

export default ProductCard;