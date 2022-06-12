import React, { useEffect } from 'react';
import {
	TodoContainer,
	InputBox,
	InputArea,
	SubmitButton,
	TodoList,
	TodoListItem,
	TodoEdit,
	CheckBox,
	TodoItem,
	FilterButton,
	FilterButtonContainer,
} from './Todo.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
export const Todo = () => {
	const [todoList, setTodoList] = React.useState([]);
	const [showData, setShowData] = React.useState([]);
	const [todo, setTodo] = React.useState('');
	const [update, setUpdate] = React.useState(false);
	const [todoUpdateID, setTodoUpdateID] = React.useState('');
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
			setShowData([...showData, payload]);
			setTodo('');
		}
	};
	const handleComplete = (id) => {
		// Finding todo id and updating the completed status
		let newTodoList = todoList.map((item) => {
			if (item.id === id) {
				item.completed = !item.completed;
			}
			return item;
		});
		setTodoList(newTodoList);

		setShowData(newTodoList);
	};
	const handleDelete = (id) => {
		// Finding todo id and deleting the todo
		let newTodoList = todoList.filter((item) => {
			return item.id !== id;
		});
		setTodoList(newTodoList);
		setShowData(newTodoList);
	};
	const handleEdit = (id) => {
		// Finding todo id and updating the todo
		// Setting update id to the todo id
		// Setting update to true and showing the content into todo input to edit
		setTodoUpdateID(id);
		setTodo(
			todoList.find((item) => {
				return item.id === id;
			}).item
		);
	};

	const handleUpdate = (e) => {
		e.preventDefault();
		if (todo.trim() === '') {
			alert('Please enter a todo');
			return;
		} else {
			let newTodoList = todoList.map((item) => {
				if (item.id === todoUpdateID) {
					item.item = todo;
				}
				return item;
			});
			setTodoList(newTodoList);
			setShowData(newTodoList);
			setTodo('');
			setTodoUpdateID('');
			setUpdate(false);
		}
	};
	const showAll = () => {
		// Showing all todos
		setShowData(todoList);
	};
	const showCompleted = () => {
		// Showing only completed todos
		let newTodoList = todoList.filter((item) => {
			return item.completed === true;
		});
		setShowData(newTodoList);
	};
	const showUncompleted = () => {
		// Showing only uncompleted todos
		let newTodoList = todoList.filter((item) => {
			return item.completed === false;
		});
		setShowData(newTodoList);
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
					<SubmitButton onClick={handleSubmit} showButton={!update}>
						Submit
					</SubmitButton>
					<SubmitButton onClick={handleUpdate} showButton={update}>
						Update
					</SubmitButton>
				</InputBox>
			</TodoContainer>
			{/* Todo List container */}
			<TodoList>
				<h1>Todo List</h1>
				<FilterButtonContainer>
					<FilterButton onClick={showAll}>All</FilterButton>
					<FilterButton onClick={showCompleted}>Done</FilterButton>
					<FilterButton onClick={showUncompleted}>Todo</FilterButton>
				</FilterButtonContainer>
				{showData.map((item) => {
					return (
						<>
							<TodoListItem>
								<TodoItem completed={item.completed}> {item.item}</TodoItem>
								<TodoEdit>
									<CheckBox
										type='checkbox'
										onChange={() => {
											handleComplete(item.id);
										}}
									/>
									<FontAwesomeIcon
										icon={faPencil}
										style={{ cursor: 'pointer' }}
										color='#F9C426'
										onClick={() => {
											setUpdate(true);
											handleEdit(item.id);
										}}
									/>
									<FontAwesomeIcon
										icon={faTrash}
										color='#D6364B'
										style={{ cursor: 'pointer' }}
										onClick={() => {
											handleDelete(item.id);
										}}
									/>
								</TodoEdit>
							</TodoListItem>
						</>
					);
				})}
			</TodoList>
		</div>
	);
};
