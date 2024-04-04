import styled from "styled-components";

export const AuthenticationContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 900px;
margin: 30px auto;
padding-right: 20px;

@media (min-width: 768px) {
	flex-direction: row;
	justify-content: space-between;
	padding-right: 0;
}
`;
