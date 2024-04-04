import Button from '../Button/Button'
import { CartDropdownContainer, CartItems, EmptyMessage } from './CartDropdown-styles.jsx'
import CartItem from '../CartItem/CartItem'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
	const { cartItems, setDropdownOpen } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
		setDropdownOpen(false);
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