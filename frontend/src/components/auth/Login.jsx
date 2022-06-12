import React from 'react';
import './styles/Signup.css';
import { AuthContainer, Input, InputContainer, Button } from './styles/Auth';
import { Navbar } from '../navbar/Navbar';
export const Login = () => {
	return (
		<>
			<Navbar />
			<AuthContainer>
				<h1 className='heading'>Log in</h1>
				<form>
					<InputContainer>
						<label htmlFor='email'>Email</label>
						<Input type='email' id='email' />
					</InputContainer>

					<InputContainer>
						<label htmlFor='password'>Password</label>
						<Input type='password' id='password' />
					</InputContainer>

					<Button type='submit'>Log in</Button>
				</form>
			</AuthContainer>
		</>
	);
};
