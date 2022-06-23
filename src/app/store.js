import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import baseApi from '@/app/api/baseApi';
import { authSlice } from '@/app/api/mainApi';

const persistConfig = {
	key: 'Bcard',
	version: 1,
	storage,
	whitelist: [authSlice.name],
};

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		[baseApi.reducerPath]: baseApi.reducer,
		[authSlice.name]: authSlice.reducer,
	}),
);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (gDM) =>
		gDM({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
