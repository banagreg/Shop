import { Outlet, } from "react-router-dom"
import './Navigation-styles.jsx'
import CartIcon from "../../components/CartIcon/CartIcon"
import CartDropdown from "../../components/CartDropdown/CartDropdown"
import { LogoContainer, NavLink, NavLinks, NavigationContainer } from "./Navigation-styles.jsx"
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from "../../store/user/user.selector.js"
import { selectIsCartOpen } from '../../store/cart/cart.selector.js'
import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

	return (
		<>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrownLogo />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>SHOP</NavLink>

					{currentUser ? (
						<NavLink as='span' onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='/auth'>SIGN IN</NavLink>
					)}

					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default Navigation