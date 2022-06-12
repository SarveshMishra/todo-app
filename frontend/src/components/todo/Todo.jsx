import React from 'react';
import {
	TodoContainer,
	InputBox,
	InputArea,
	SubmitButton,
	TodoList,
	TodoListItem,
	TodoEdit,
	CheckBox,
} from './Todo.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
export const Todo = () => {
	const [todoList, setTodoList] = React.useState([]);
	const [todo, setTodo] = React.useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (todo.trim() === '') {
			alert('Please enter a todo');
			return;
		} else {
			let payload = {
				id: todoList.length + 1,
				item: todo,
				completed: false,
				createdAt: new Date(),
			};
			setTodoList([...todoList, payload]);
			setTodo('');
		}
	};

	return (
		<div>
			{/* Todo Input container */}
			<TodoContainer>
				<h1>Todo Input</h1>
				<InputBox>
					<InputArea
						placeholder='New Todo'
						onChange={(e) => {
							setTodo(e.target.value);
						}}
						value={todo}
						required={true}
					/>
					<SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
				</InputBox>
			</TodoContainer>
			{/* Todo List container */}
			<TodoList>
				<h1>Todo List</h1>
				{todoList.map((item) => {
					return (
						<>
							<TodoListItem>
								<div> {item.item}</div>
								<TodoEdit>
									<CheckBox type='checkbox' />
									<FontAwesomeIcon icon={faPencil} color='#F9C426' />
									<FontAwesomeIcon icon={faTrash} color='#D6364B' />
								</TodoEdit>
							</TodoListItem>
						</>
					);
				})}
			</TodoList>
		</div>
	);
};
