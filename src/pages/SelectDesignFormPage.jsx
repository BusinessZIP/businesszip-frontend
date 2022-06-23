import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Bcard from '../components/bcard';
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

const BcardButton = styled.button`
	cursor: pointer;
	background: #e67a7a;
	font-family: 'MICEGothic';
	font-size: 1.2rem;
	border-radius: 20px;
	color: white;
	width: 100%;
	border: none;
	padding: 1.6rem 0px;
	&:hover,
	&:focus {
		color: white;
		box-shadow: inset 15em 0 0 0 #e99494;
		background: #e99494;
		transition: all 0.5s;
		&:before {
			width: 100%;
		}
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
	const navigate = useNavigate();
	const [selectedForm, setSelectedForm] = useState();

	const goNextPage = () => {
		navigate('/create');
	};

	return (
		<Layout
			title='디자인 시안 선택'
			headerTitleW='디자인 시안을 선택해 주세요'
			background='linear-gradient(90deg, #2474D2 15.8%, #D4E3F4 96.91%);'
			headers={[]}
		>
			<Container>
				<Wrapper>
					{Array.from({ length: 6 }).map((v, i) => (
						<BcardWrapper onClick={() => setSelectedForm(i)}>
							<Bcard />
							{selectedForm === i && <CheckIcon />}
						</BcardWrapper>
					))}
				</Wrapper>
				<BcardButton onClick={goNextPage}>선택 완료하기</BcardButton>
			</Container>
		</Layout>
	);
};

export default SelectDesignFormPage;
