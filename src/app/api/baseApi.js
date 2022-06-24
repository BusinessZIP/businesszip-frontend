import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const baseApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://49.50.162.123:8000',

		prepareHeaders: (headers, { getState }) => {
			const { token } = getState().auth;
			if (token) {
				headers.set('X-AUTH-TOKEN', `${token}`);
			}
			return headers;
		},
	}),
	keepUnusedDataFor: 0,
	endpoints: () => ({}),
});

export default baseApi;
