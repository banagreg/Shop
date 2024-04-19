import { Outlet, } from "react-router-dom"
import CartIcon from "../../components/CartIcon/CartIcon"
import CartDropdown from "../../components/CartDropdown/CartDropdown"
import { LogoContainer, StyledNavLink, NavLinks, NavigationContainer } from "./Navigation-styles"
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from "../../store/user/user.selector"
import { selectIsCartOpen } from '../../store/cart/cart.selector'
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
					<StyledNavLink to='/shop'>SHOP</StyledNavLink>

					{currentUser ? (
						<StyledNavLink to='/auth' as='span' onClick={signOutUser}>
							SIGN OUT
						</StyledNavLink>
					) : (
						<StyledNavLink to='/auth'>SIGN IN</StyledNavLink>
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