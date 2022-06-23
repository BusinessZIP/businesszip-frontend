import styled from 'styled-components';

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

const Wrapper = styled.div``;

function MyNameCard() {
	return (
		<Layout title='내 명함'>
			<Container>
				<div style={{ position: 'absolute', left: '0px', height: '100%' }}>
					<LeftTitleLogo
						title='내 명함'
						color='orange'
					/>
				</div>
				<Wrapper />
			</Container>
		</Layout>
	);
}

export default MyNameCard;
