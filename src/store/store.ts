import {
	Action,
	Middleware,
	ThunkAction,
	ThunkMiddleware,
	configureStore,
} from '@reduxjs/toolkit';
import { RootState, rootReducer } from './root-reducer';
//import logger from 'redux-logger'

const thunkMiddleware: ThunkMiddleware<RootState> =
	(store) => (next) => (action) => {
		if (typeof action === 'function') {
			return action(store.dispatch, store.getState);
		}
		return next(action);
	};

const loggerMiddleware: Middleware<{}, RootState> =
	(store) => (next) => (action) => {
		console.log('Dispatching:', action);
		const result = next(action);
		console.log('New state:', store.getState());
		return result;
	};

const middlewares = [
	thunkMiddleware,
	process.env.NODE_ENV === 'development' && loggerMiddleware,
].filter(Boolean) as Middleware[];

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(middlewares),
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
