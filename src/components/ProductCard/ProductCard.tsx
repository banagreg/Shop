import Button from '../Button/Button'
import { Footer, Name, Price, ProductCartContainer } from './ProductCard-styles'
import { BUTTON_TYPE_CLASSES } from '../../constants/constants'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.slice'
import { ProductCardProps } from '../../types/types'

const ProductCard = ({ product }: ProductCardProps) => {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();

	const addToCart = () => dispatch(addItemToCart(product));

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
