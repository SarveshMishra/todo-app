import styled from 'styled-components';

export const TodoContainer = styled.div`
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
		text-align: center;
	}
`;

export const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 200px;
	margin: 0 auto;
	border: 1px solid #ccc;
	border-radius: 20px;
`;

export const InputArea = styled.input`
	width: 90%;
	height: 50px;
	border: 1px solid #ccc;
	border-radius: 20px;
	padding: 1rem;
	box-sizing: border-box;
	font-size: 1.5rem;
`;

export const SubmitButton = styled.button`
	width: 90%;
	height: 50px;
	background-color: #24a2b8;
	color: white;
	border: none;
	border-radius: 20px;
	margin-top: 1rem;
	cursor: pointer;
	font-size: 1.2rem;
	&:hover {
		background-color: #24c2b8;
	}
	display: ${(props) => (props.showButton ? 'block' : 'none')};
`;

export const TodoList = styled.div`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
		text-align: center;
	}
`;

export const TodoListItem = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 50%;
	height: 50px;
	border: 1px solid #ccc;
	border-radius: 20px;
	padding: 1rem;
	box-sizing: border-box;
	margin: 0.5rem auto;
`;

export const TodoEdit = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 12%;
`;
export const CheckBox = styled.input`
	width: 20px;
	height: 20px;
	cursor: pointer;
	&:checked:after {
		background-color: #fff;
		color: #24a2b8;
	}
`;

export const TodoItem = styled.div`
	text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
	color: ${(props) => (props.completed ? 'red' : 'black')};
	font-size: 1.2rem;
`;

export const TodoUpdate = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const FilterButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 50%;

	border-radius: 20px;
	padding: 1rem;
	box-sizing: border-box;
	margin: 0.5rem auto;
`;

export const FilterButton = styled.button`
	width: 30%;
	height: 50px;
	background-color: #24a2b8;
	color: white;
	border: none;
	border-radius: 20px;

	cursor: pointer;
	font-size: 1.2rem;
	&:hover {
		background-color: #24c2b8;
	}
`;
