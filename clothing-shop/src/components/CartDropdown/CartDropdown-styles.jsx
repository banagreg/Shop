import styled from 'styled-components'
import Button from '../Button/Button'

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;

		::-webkit-scrollbar {
			background: white;
			width: 7px;
		}

		::-webkit-scrollbar-thumb {
			background: lightgray;
			border-radius: 5px;
		}

		${Button} {
			margin-top: auto;
		}
`;

export const CartItems = styled.div`
	flex: 1;
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: auto;
	margin-bottom: 5px;
`;

export const EmptyMessage = styled.h1`
	font-size: 18px;
	margin: 50px auto;
`;

