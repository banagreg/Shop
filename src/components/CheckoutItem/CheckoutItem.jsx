import './CheckoutItem-styles.jsx'
import { Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, Value } from './CheckoutItem-styles.jsx'
import { addItemToCart, removeItemToCart, clearItem } from '../../store/cart/cart.action.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector.js'

const CheckoutItem = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems)

	const handleClearItem = () => dispatch(clearItem(cartItems, cartItem));
	const handleIncreaseCount = () => dispatch(addItemToCart(cartItems, cartItem));
	const handleDecreaseCount = () => dispatch(removeItemToCart(cartItems, cartItem));

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