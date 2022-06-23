import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const baseApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: '',

		prepareHeaders: (headers, { getState }) => {
			const { token } = getState().auth;
			if (token) {
				headers.set('Authentication', `Bearer ${token}`);
			}
			return headers;
		},
	}),
	keepUnusedDataFor: 0,
	endpoints: () => ({}),
});

export default baseApi;
