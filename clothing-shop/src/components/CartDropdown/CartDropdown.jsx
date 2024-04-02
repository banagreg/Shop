import Button from '../Button/Button'
import './CartDropdown.scss'

const CartDropdown = () => {
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				<Button>Go checkout</Button>
			</div>
		</div>
	)
}

export default CartDropdown