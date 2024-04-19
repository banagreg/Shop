import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { UserData } from '../../types/types';

type UserState = {
	currentUser: UserData | null;
};

const INITIAL_STATE: UserState = {
	currentUser: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState: INITIAL_STATE,
	reducers: {
		setCurrentUser(state, action) {
			state.currentUser = action.payload;
		},
	},
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
