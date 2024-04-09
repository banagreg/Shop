import Button from '../Button/Button'
import { CartDropdownContainer, CartItems, EmptyMessage } from './CartDropdown-styles.jsx'
import CartItem from '../CartItem/CartItem'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector.js'
import { setIsDropdownOpen } from '../../store/cart/cart.action.js'

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
		dispatch(setIsDropdownOpen(false));
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