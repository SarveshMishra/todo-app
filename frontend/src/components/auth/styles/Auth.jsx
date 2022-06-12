import styled from 'styled-components';

export const AuthContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 20%;
	margin: 0 auto;
	margin-top: 5rem;
	background-color: #fff;
	box-shadow: 2px 2px 2px 4px rgba(0, 0, 0, 0.1);
	box-size: border-box;
	padding: 0 5% 10% 5%;
	border-radius: 10px;
`;

export const Input = styled.input`
	width: 90%;
	height: 40px;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 0 10px;
	margin-bottom: 10px;
	font-size: 16px;
	&:focus {
		outline: none;
	}
`;
export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 10px;
`;
export const Button = styled.button`
	width: 60%;
	height: 60px;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 0 10px;
	margin-bottom: 10px;
	font-size: 16px;
	&:focus {
		outline: none;
	}
	background-color: hsl(202, 84%, 60%);
	color: #fff;
	cursor: pointer;
	margin-top: 20%;;	
	`;
