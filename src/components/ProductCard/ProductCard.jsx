import Button from '../Button/Button'
import { Footer, Name, Price, ProductCartContainer } from './ProductCard-styles'
import { BUTTON_TYPE_CLASSES } from '../../constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const addToCart = () => dispatch(addItemToCart(cartItems, product));

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

export default ProductCard
