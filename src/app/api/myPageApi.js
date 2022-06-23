import baseApi from '@/app/api/baseApi';

const myPageApi = baseApi
	.enhanceEndpoints({
		addTagTypes: ['MyPage'],
	})
	.injectEndpoints({
		endpoints: (builder) => ({
			getMyBusinessCard: builder.query({
				query: () => ({
					url: '/api/v1/mypage',
					method: 'POST',
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
						url: args.url ?? null,
						name: args.name ?? null,
						address: args.address ?? null,
						job: args.job ?? null,
						email: args.email ?? null,
						phone: args.phoneNumber ?? null,
						tags: args.tags ?? [],
					},
				}),
				invalidatesTags: () => [{ type: 'MyPage', id: 'LIST' }],
			}),
		}),
	});

export default myPageApi;
