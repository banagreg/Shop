import Button from '../Button/Button'
import './CartDropdown.scss'
import CartItem from '../CartItem/CartItem'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext)
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.length > 0 ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)) : (
					<h1 className='empty-message'>Your cart is empty</h1>
				)}

			</div>
			<Button>Go checkout</Button>
		</div>
	);
};

export default CartDropdown