import styled from 'styled-components';

const Children = styled.div`
	width: 100vw;
	height: calc(100vh - 3rem);
`;

const Header = styled.div`
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
	box-sizing: border-box;
`;

const Layout = ({ title, children }) => {
	return (
		<>
			<Header>{title && <span>{title}</span>}</Header>
			<Children>{children}</Children>
		</>
	);
};
export default Layout;
