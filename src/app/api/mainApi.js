import { createSelector, createSlice } from '@reduxjs/toolkit';

import baseApi from '@/app/api/baseApi';

export const api = baseApi.enhanceEndpoints({}).injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (args) => ({
				url: '/api/v1/login',
				method: 'POST',
				body: {
					email: args.email,
					password: args.password,
				},
			}),
		}),
		signUp: builder.mutation({
			query: (args) => ({
				url: '/api/v1/signup',
				method: 'POST',
				body: {
					email: args.email,
					password: args.password,
					name: args.name,
					phone: args.phoneNumber,
				},
			}),
		}),
		logout: builder.mutation({
			queryFn: () => {
				return {
					data: undefined,
				};
			},
		}),
	}),
});

const initialAuthState = { token: null };
export const authSlice = createSlice({
	name: 'auth',
	initialState: initialAuthState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addMatcher(api.endpoints.login.matchFulfilled, (state, { payload }) => {
				state.token = payload.token;
			})
			.addMatcher(api.endpoints.logout.matchFulfilled, () => {
				return initialAuthState;
			});
	},
});

export const isLoginSelector = createSelector(
	(state) => state.auth.token,
	(token) => token !== null,
);
