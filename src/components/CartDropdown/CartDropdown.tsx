import Button from '../Button/Button'
import { CartDropdownContainer, CartItems, EmptyMessage } from './CartDropdown-styles'
import CartItem from '../CartItem/CartItem'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.slice'
import { CartItem as TCartItem } from '../../types/types'

const CartDropdown = () => {
	const cartItems: TCartItem[] = useSelector(selectCartItems);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
		dispatch(setIsCartOpen(false));
	}

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length > 0 ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckoutHandler}>Go checkout</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown