import { CartIconContainer, ShoppingIcon, ItemCount } from './CartIcon-styles.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartCount, selectIsDropdownOpen } from '../../store/cart/cart.selector.js'
import { setIsDropdownOpen } from '../../store/cart/cart.action.js'

const CartIcon = () => {
	const cartCount = useSelector(selectCartCount);
	const isDropdownOpen = useSelector(selectIsDropdownOpen);
	const dispatch = useDispatch();

	const toggleDropdown = () => dispatch(setIsDropdownOpen(!isDropdownOpen));

	return (
		<CartIconContainer onClick={toggleDropdown}>
			<ShoppingIcon />
			<ItemCount as='span'>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon