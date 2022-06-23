import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { api, isLoginSelector } from '@/app/api/mainApi';

const Header = styled.div`
	top: 0;
	margin-left: auto;
	display: flex;
	justify-content: flex-end;
	width: 100%;
	height: 80px;
	align-items: center;
	font-size: 1.2rem;
	font-weight: 600;
	box-shadow: ${({ transparent }) => (transparent ? 'none' : '0 5px 18px -7px #a5a5a5')};
	border-radius: 0 0 30px 0;
	* {
		text-decoration: none;
	}
	.title,
	.titleOn {
		margin: 0 30px;
	}

	.title {
		color: #828282;
	}

	.titleOn {
		color: #e21818;
	}

	span {
		cursor: pointer;
	}

	background: ${({ background }) => background};
	h2 {
		position: absolute;
		left: 2rem;
		color: white;
	}
`;

const Children = styled.div`
	width: 100vw;
	height: calc(100vh - 80px);
`;

const Menu = ({ name, extraClassName = 'title', goPage, ...rest }) => {
	return (
		<Link to={goPage}>
			<div
				className={extraClassName}
				{...rest}
			>
				<span>{name}</span>
			</div>
		</Link>
	);
};

const HEADER_MAPS = [
	{
		name: '내 명함',
		path: '/mypage',
	},

	{
		name: '명함 검색',
		path: '/search',
	},
];

const Layout = ({ headers = HEADER_MAPS, headerTitle, title, children, ...rest }) => {
	const currentUser = useSelector(isLoginSelector);
	const [logout] = api.useLogoutMutation();
	return (
		<>
			<Header {...rest}>
				{headerTitle && <h2>{headerTitle}</h2>}
				{headers.map((header) => (
					<Menu
						key={header.name}
						name={header.name}
						goPage={header.path}
						extraClassName={title === header.name ? 'titleOn' : 'title'}
					/>
				))}
				{!currentUser && (
					<Menu
						name='로그인'
						goPage='/signIn'
					/>
				)}
				{currentUser && (
					<Menu
						name='로그아웃'
						goPage='/'
						onClick={() => logout()}
					/>
				)}
			</Header>
			{children && <Children>{children}</Children>}
		</>
	);
};
export default Layout;
