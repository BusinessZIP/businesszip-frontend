import baseApi from '@/app/api/baseApi';

const searchApi = baseApi.enhanceEndpoints({}).injectEndpoints({
	endpoints: (builder) => ({
		getBcardByInfo: builder.mutation({
			query: (arg) => ({
				url: `api/v1/search/info?word=${arg}`,
				method: 'GET',
			}),
		}),
		getBcardByTag: builder.mutation({
			query: (arg) => ({
				url: `api/v1/search/tag?word=${arg}`,
				method: 'GET',
			}),
		}),
	}),
});

export default searchApi;
