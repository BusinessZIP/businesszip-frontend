import styled from 'styled-components';

const Container = styled.div`
	width: 400px;
	height: 230px;
	background: ${({ background }) => (background ? `url(${background})` : 'whitesmoke')};
`;

const Bcard = ({ background }) => {
	return <Container background={background} />;
};

export default Bcard;
