import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Dashboard } from './views/Dashboard';

function App() {
	// Fetching redux state
	const isLogin = useSelector((state) => state.authReducer.isLogin);
	let navigate = useNavigate();
	// Conditional Rendering if user is logged in display dashboard else display signup page
	React.useEffect(() => {
		if (!isLogin) {
			navigate('/signup');
		}
	}, [isLogin, navigate]);

	return (
		<>
			<Dashboard />
		</>
	);
}

export default App;
