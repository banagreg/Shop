import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './Navigation.scss';
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isDropdownOpen } = useContext(CartContext);

	const signOutHandler = async () => {
		signOutUser();
	}

	return (
		<>
			<div className='navigation'>

				<Link className='logo-container' to='/'>
					<CrownLogo className='logo' />
				</Link>

				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>SHOP</Link>
					{currentUser ? (
						<span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
					) : (
						<Link className='nav-link' to='/auth'>SIGN IN</Link>
					)}
					<CartIcon />
				</div>
				{isDropdownOpen && <CartDropdown />}
			</div>

			<Outlet />
		</>
	);
};

export default Navigation;