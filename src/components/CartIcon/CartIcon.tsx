import { CartIconContainer, ShoppingIcon, ItemCount } from './CartIcon-styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.slice'

const CartIcon = () => {
	const cartCount = useSelector(selectCartCount);
	const isCartOpen = useSelector(selectIsCartOpen);
	const dispatch = useDispatch();

	const toggleCart = () => dispatch(setIsCartOpen(!isCartOpen));

	return (
		<CartIconContainer onClick={toggleCart}>
			<ShoppingIcon />
			<ItemCount as='span'>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon