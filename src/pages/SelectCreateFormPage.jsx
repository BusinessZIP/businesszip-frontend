import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Layout from '@/components/layout';

const Container = styled.div`
	position: relative;
	display: flex;
	height: calc(100vh - 6rem);
	flex-direction: column;
	justify-self: center;
	justify-content: center;
	align-items: center;
	/* padding: 50px 0; */
`;

const BackColor = styled.div`
	height: 100vh;
	background: linear-gradient(
		69.01deg,
		rgba(34, 74, 215, 0.18) 17.08%,
		rgba(127, 182, 232, 0.85) 54.36%
	);
`;

const Wrapper = styled.div`
	display: flex;
	column-gap: 4rem;
`;

const Button = styled.button`
	border: none;
	padding: 2rem;
	width: 20rem;
	height: 12rem;
	background: rgba(255, 255, 255, 0.73);
	border-radius: 30px;
	pre {
		font-family: 'MICEGothic';
		font-size: 1.2rem;
	}
	p {
		font-family: 'MICEGothic';
		font-style: italic;
		font-size: 1.2rem;
		font-weight: 100;
	}
`;

const SelectCreateFormPage = () => {
	const navigate = useNavigate();
	return (
		<BackColor>
			<Layout
				title='내 명함'
				background='none'
			/>
			<Container>
				<Wrapper>
					<Button onClick={() => navigate('/createDiy')}>
						<p>D.I.Y</p>
					</Button>
					<Button onClick={() => navigate('/selectDesign')}>
						<pre>
							{'기본\n'}
							<p>Form</p>
						</pre>
					</Button>
				</Wrapper>
			</Container>
		</BackColor>
	);
};

export default SelectCreateFormPage;
