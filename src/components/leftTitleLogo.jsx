import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	width: 50vw;
	height: 13px;
	background: linear-gradient(90deg, #2474d2 15.8%, #d4e3f4 91.34%);
	border-radius: 0 0 5px 0;
`;

const LeftTitleLogo = () => {
	return (
		<Container>
			<div className='square' />
		</Container>
	);
};

export default LeftTitleLogo;
