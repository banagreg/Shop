import './CheckoutItem-styles.jsx'
import { Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, Value } from './CheckoutItem-styles.jsx'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.slice'
import { useDispatch } from 'react-redux'

const CheckoutItem = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;
	const dispatch = useDispatch();

	const handleClearItem = () => dispatch(clearItemFromCart(cartItem));
	const handleIncreaseCount = () => dispatch(addItemToCart(cartItem));
	const handleDecreaseCount = () => dispatch(removeItemFromCart(cartItem));

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