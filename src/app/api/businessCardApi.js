import baseApi from '@/app/api/baseApi';

const businessCardApi = baseApi
	.enhanceEndpoints({
		addTagTypes: ['Events'],
	})
	.injectEndpoints({
		endpoints: (builder) => ({
			getBusinessCards: builder.query({
				query: () => ({
					url: '/api/v1/bcard',
					method: 'POST',
				}),
			}),
			getBusinessCardInfo: builder.mutation({
				query: (args) => ({
					url: '/api/v1/bcard/info',
					method: 'POST',
					body: {
						id: args.id,
					},
				}),
			}),
			setMemo: builder.mutation({
				query: (args) => ({
					url: '/api/v1/memo',
					method: 'POST',
					body: {
						id: args.id,
						content: args.content ?? '',
					},
				}),
			}),
		}),
	});

export default businessCardApi;
