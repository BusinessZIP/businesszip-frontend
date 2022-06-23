import { useState } from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

const Container = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-self: center;
	align-items: center;
`;

const Wrapper = styled.div`
	padding: 2rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 3rem 2rem;
`;

const BcardForm = styled.div`
	width: 30vw;
	height: 20vh;
	background: whitesmoke;
`;

const BcardWrapper = styled.div`
	position: relative;
	svg {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 4rem;
		height: 4rem;
	}
`;

const CheckIcon = () => (
	<svg
		width='119'
		height='119'
		viewBox='0 0 119 119'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<circle
			cx='59.5'
			cy='59.5'
			r='59.5'
			fill='#F3A9A4'
		/>
		<path
			d='M28 52.4112L53.3481 78L90 41'
			stroke='white'
			strokeWidth='10'
		/>
	</svg>
);

const SelectDesignFormPage = () => {
	const [selectedForm, setSelectedForm] = useState();
	return (
		<Layout
			title='디자인 시안 선택'
			headerTitle='디자인 시안을 선택해 주세요'
			background='linear-gradient(89.33deg, rgba(230, 121, 121, 0.83) 19.28%, rgba(222, 161, 68, 0.466875) 53.14%, rgba(240, 210, 164, 0.6308) 96.91%);'
		>
			<Container>
				<Wrapper>
					{Array.from({ length: 6 }).map((v, i) => (
						<BcardWrapper>
							<BcardForm onClick={() => setSelectedForm(i)} />
							{selectedForm === i && <CheckIcon />}
						</BcardWrapper>
					))}
				</Wrapper>
			</Container>
		</Layout>
	);
};

export default SelectDesignFormPage;
