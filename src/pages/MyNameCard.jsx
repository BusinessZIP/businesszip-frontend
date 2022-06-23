import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Bcard from '../components/bcard';
import Layout from '../components/layout';
import LeftTitleLogo from '../components/leftTitleLogo';

const Container = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-self: center;
	align-items: center;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2.5rem;
	gap: 3rem;
`;

const AddButton = styled.button`
	border: none;
	width: 400px;
	height: 230px;
	background: whitesmoke;
	font-size: 4rem;
	cursor: pointer;
	:hover {
		opacity: 50%;
	}
`;

function MyNameCard() {
	const navigate = useNavigate();
	return (
		<Layout title='내 명함'>
			<Container>
				<div style={{ position: 'absolute', left: '0px', height: '100%' }}>
					<LeftTitleLogo
						title='내 명함'
						color='orange'
					/>
				</div>
				<Wrapper>
					<Bcard />
					<AddButton onClick={() => navigate('/selectCreate')}>+</AddButton>
				</Wrapper>
			</Container>
		</Layout>
	);
}

export default MyNameCard;
