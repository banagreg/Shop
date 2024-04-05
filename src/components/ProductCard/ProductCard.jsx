import React, { useContext } from 'react'
import Button from '../Button/Button'
import { Footer, Name, Price, ProductCartContainer } from './ProductCard-styles'
import { CartContext } from '../../contexts/cart.context';
import { BUTTON_TYPE_CLASSES } from '../../constants/constants';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addToCart = () => addItemToCart(product);

	return (
		<ProductCartContainer>
			<img src={imageUrl} alt={`${name}`} />
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addToCart}
			>
				Add to card
			</Button>
		</ProductCartContainer>
	);
};

export default ProductCard;