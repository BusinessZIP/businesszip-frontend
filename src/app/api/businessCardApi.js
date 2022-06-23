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
			getBusinessCardInfo: builder.query({
				query: (args) => ({
					url: '/api/v1/bcard/info',
					method: 'POST',
					body: {
						id: args.id,
					},
				}),
			}),
		}),
	});

export default businessCardApi;
