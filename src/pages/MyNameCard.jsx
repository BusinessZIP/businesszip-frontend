import Layout from '../components/layout';

function MyNameCard() {
	return (
		<Layout
			headers={[
				{
					name: '내 명함',
					path: '/mypage',
				},

				{
					name: '명함 검색',
					path: '/search',
				},

				{
					name: '로그아웃',
					path: '/',
				},
			]}
			background
			title='내 명함'
		/>
	);
}

export default MyNameCard;
