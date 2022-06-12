import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isLogin: true,
	},
	reducers: {
		login: (state) => {
			state.isLogin = true;
		},
		signOut: (state) => {
			state.isLogin = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { login, signOut } = authSlice.actions;

export default authSlice.reducer;
