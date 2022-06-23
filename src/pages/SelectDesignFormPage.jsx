import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Bcard from '../components/bcard';
import Layout from '../components/layout';
import { CARD_TYPE_MAPS } from '../utils/cardType';

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
	div {
		cursor: pointer;
		box-shadow: '0 5px 18px -7px #a5a5a5';
	}
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
	background: #2474d2;
	font-family: 'MICEGothic';
	font-size: 1.2rem;
	border-radius: 20px;
	color: white;
	width: 100%;
	border: none;
	padding: 1.3rem 1.3rem;
	margin: 10px 0 50px 0;
	&:hover,
	&:focus {
		color: white;
		box-shadow: inset 15em 0 0 0 #2474d2;
		background: #2474d2;
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
			fill='#2474D2'
		/>
		<path
			d='M28 52.4112L53.3481 78L90 41'
			stroke='white'
			strokeWidth='10'
		/>
	</svg>
);

const SelectDesignFormPage = () => {
	const [selectedType, setSelectedType] = useState();

	return (
		<Layout
			title='디자인 시안 선택'
			headerTitleW='디자인 시안을 선택해 주세요'
			background='linear-gradient(90deg, #2474D2 15.8%, #D4E3F4 96.91%);'
			headers={[]}
		>
			<Container>
				<Wrapper>
					{Object.entries(CARD_TYPE_MAPS).map(([key, value]) => (
						<BcardWrapper onClick={() => setSelectedType(key)}>
							<Bcard background={value} />
							{selectedType === key && <CheckIcon />}
						</BcardWrapper>
					))}
				</Wrapper>
				<Link
					to='/create'
					state={{ type: selectedType }}
				>
					<BcardButton>선택 완료하기</BcardButton>
				</Link>
			</Container>
		</Layout>
	);
};

export default SelectDesignFormPage;
