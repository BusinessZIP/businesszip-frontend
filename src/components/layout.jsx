import styled, { css } from 'styled-components';

const Children = styled.div`
	padding-top: 80px;
	width: 100vw;
	height: 100vh;
`;

const Layout = ({
	title1,
	title2,
	title3,
	children,
	extraClassName1,
	extraClassName2,
	extraClassName3,
	...rest
}) => {
	const className1 = extraClassName1 ? 'titleOn' : 'title';
	const className2 = extraClassName2 ? 'titleOn' : 'title';
	const className3 = extraClassName3 ? 'titleOn' : 'title';

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

	return (
		<>
			<Header {...rest}>
				<div className={className1}>{title1 && <span>{title1}</span>}</div>
				<div className={className2}>{title2 && <span>{title2}</span>}</div>
				<div className={className3}>{title3 && <span>{title3}</span>}</div>
			</Header>
			<Children>{children}</Children>
		</>
	);
};
export default Layout;
