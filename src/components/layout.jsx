import styled from 'styled-components';

const Children = styled.div`
	padding-top: 3rem;
	width: 100vw;
	height: 100vh;
`;

const Header = styled.div`
	position: fixed;
	top: 0;
	background: white;
	width: 100%;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	font-weight: 600;
	color: #222;
	border-bottom: 1px solid #bbb;
	padding: 0 1rem;
`;

const Layout = ({ title1, title2, title3, children }) => {
	return (
		<>
			<Header>
				{title1 && <span>{title1}</span>}
				{title2 && <span>{title2}</span>}
				{title3 && <span>{title3}</span>}
			</Header>
			<Children>{children}</Children>
		</>
	);
};
export default Layout;
