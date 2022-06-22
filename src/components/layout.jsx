import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Children = styled.div`
	padding-top: 80px;
	width: 100vw;
	height: calc(100vh - 3rem);
`;
const Menu = ({ name, extraClassName }) => {
	return (
		<div className={extraClassName}>
			<span>{name}</span>
		</div>
	);
};

const Layout = ({ headers, title, children, ...rest }) => {
	const Header = styled.div`
		position: fixed;
		top: 0;
		margin-left: auto;
		display: flex;
		justify-content: flex-end;
		background: white;
		width: 100%;
		height: 80px;
		align-items: center;
		font-size: 1.2rem;
		font-weight: 600;
		border-bottom: 1px solid #bbb;
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
	const navigate = useNavigate();
	const goPage = (path) => navigate(path);

	return (
		<>
			<Header {...rest}>
				{headers.map((header) => (
					<Menu
						key={header.name}
						name={header.name}
						goPage={goPage(header.path)}
						extraClassName={title === header.name ? 'titleOn' : 'title'}
					/>
				))}
			</Header>
			<Children>{children}</Children>
		</>
	);
};
export default Layout;
