import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './Checkout-styles'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
import PaymentForm from '../../components/PaymentForm/PaymentForm'


const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>

			{
				cartItems.map((item) => (
					<CheckoutItem key={item.id} cartItem={item} />
				))
			}
			< Total > Total: ${cartTotal}</ Total>
			<PaymentForm />
		</CheckoutContainer >
	);
};

export default Checkout