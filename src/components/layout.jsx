import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

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
	border-bottom: 1px solid #bbb;
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

	${({ background }) =>
		background &&
		css`
			background: linear-gradient(
				89.33deg,
				rgba(230, 121, 121, 0.83) 19.28%,
				rgba(222, 161, 68, 0.466875) 53.14%,
				rgba(240, 210, 164, 0.6308) 96.91%
			);
		`}
`;

const Children = styled.div`
	width: 100vw;
	height: calc(100vh - 80px);
`;

const Menu = ({ name, extraClassName, goPage }) => {
	return (
		<Link to={goPage}>
			<div className={extraClassName}>
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

	{
		name: '로그아웃',
		path: '/',
	},
];

const Layout = ({ headers = HEADER_MAPS, title, children, ...rest }) => {
	return (
		<>
			<Header {...rest}>
				{headers.map((header) => (
					<Menu
						key={header.name}
						name={header.name}
						goPage={header.path}
						extraClassName={title === header.name ? 'titleOn' : 'title'}
					/>
				))}
			</Header>
			<Children>{children}</Children>
		</>
	);
};
export default Layout;
