import React from 'react';
import { Link } from 'react-router-dom';
import style from 'styled-components';

const Nav = style.nav`

    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    padding: 0 2rem;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 3rem;
    border-bottom: 1px solid #e6e6e6;
    @media (max-width: 768px) {
        display: none;
    }
    a {
        text-decoration: none;
        color: #000;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 0 1rem;
        &:hover {
            color: #000;
            text-decoration: underline;
        }
    }
    
`;

export const Navbar = () => {
	return (
		<div>
			<Nav>
				<Link to='/'> Dashboard </Link>
				<Link to='/login'> Login </Link>
				<Link to='/signup'> Signup </Link>
			</Nav>
		</div>
	);
};
