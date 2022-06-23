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
		126.43deg,
		rgba(243, 169, 164, 0.42) 23.5%,
		rgba(109, 51, 154, 0.47) 63.87%,
		rgba(6, 3, 170, 0.4) 88.31%
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
		font-size: 4rem;
	}
	p {
		font-family: 'Inter';
		font-style: italic;
		font-size: 4rem;
		font-weight: 100;
	}
`;

const SelectCreateFormPage = () => {
	return (
		<BackColor>
			<Layout
				title='내 명함'
				background='none'
			/>
			<Container>
				<Wrapper>
					<Button>
						<p>D.I.Y</p>
					</Button>
					<Button>
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
