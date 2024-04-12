import { Outlet, } from "react-router-dom"
import './Navigation-styles.jsx'
import CartIcon from "../../components/CartIcon/CartIcon"
import CartDropdown from "../../components/CartDropdown/CartDropdown"
import { LogoContainer, NavLink, NavLinks, NavigationContainer } from "./Navigation-styles.jsx"
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from "../../store/user/user.selector.js"
import { selectIsDropdownOpen } from '../../store/cart/cart.selector.js'
import { useDispatch } from 'react-redux'
import { signOutStart } from "../../store/user/user.action.js"

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isDropdownOpen = useSelector(selectIsDropdownOpen);
	const dispatch = useDispatch();

	const signOutUser = () => dispatch(signOutStart());

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
				{isDropdownOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default Navigation