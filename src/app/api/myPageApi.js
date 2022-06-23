import baseApi from '@/app/api/baseApi';

const myPageApi = baseApi
	.enhanceEndpoints({
		addTagTypes: ['MyPage'],
	})
	.injectEndpoints({
		endpoints: (builder) => ({
			getMyBusinessCard: builder.mutation({
				query: (args) => ({
					url: '/api/v1/mypage',
					method: 'POST',
					body: {
						id: args.id,
					},
				}),
				providesTags: () => [{ type: 'MyPage', id: 'LIST' }],
			}),
			getMyBusinessCardInfo: builder.mutation({
				query: (args) => ({
					url: '/api/v1/mypage/info',
					method: 'POST',
					body: {
						id: args.id,
					},
				}),
			}),
			createBusinessCard: builder.mutation({
				query: (args) => ({
					url: '/api/v1/mypage/post-card',
					method: 'POST',
					body: {
						background: args.background,
						url: args.url,
						name: args.name,
						address: args.address,
						job: args.job,
						email: args.email,
						phone: args.phoneNumber,
						tags: args.tags,
					},
				}),
				invalidatesTags: () => [{ type: 'MyPage', id: 'LIST' }],
			}),
		}),
	});

export default myPageApi;
