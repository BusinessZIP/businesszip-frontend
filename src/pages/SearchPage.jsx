import { useEffect, useState } from 'react';
import styled from 'styled-components';

import businessCardApi from '../app/api/businessCardApi';
import searchApi from '../app/api/searchApi';
import Bcard from '../components/bcard';
import Layout from '../components/layout';
import LeftTitleLogo from '../components/leftTitleLogo';
import Modal from '../components/modal';

const Container = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-self: center;
	align-items: center;
	.center {
		display: flex;
		flex-direction: column;
		justify-self: center;
		align-items: center;
	}
	.cardList {
		display: flex;
		flex-direction: row nowrap;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
`;

const Wrapper = styled.div`
	margin: 0 10vw;
	display: flex;
	flex-direction: column;
	padding: 2.5rem;
	gap: 3rem;
`;

const HashTagWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
`;

const CardsWrapper = styled.div`
	display: inline-flex;
	align-items: center;
	.grid-container {
		width: 400px;
	}
`;

const SearchWrapper = styled.div`
	display: flex;
	gap: 1rem;
	margin: 30px 0;
`;

const SearchButton = styled.button`
	cursor: pointer;
	color: white;
	width: 5vw;
	height: 6vh;
	font-family: 'MICEGothic';
	font-size: 1.1rem;
	border: none;
	background: #2474d2;
	box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.12);
	border-radius: 30px;
`;

const Input = styled.input`
	border: none;
	width: 30vw;
	height: 6vh;
	font-family: 'MICEGothic';
	font-size: 1rem;
	padding: 1rem 2rem;
	box-sizing: border-box;
	background: #ffffff;
	box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.12);
	border-radius: 30px;
`;

const HashTagStyle = styled.div`
	width: 6vw;
	padding: 0.6rem 2rem;
	text-align: center;
	background: #d4e3f4;
	font-family: 'MICEGothic';
	box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.12);
	border-radius: 20px;
`;

const ModalWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	.business {
		box-shadow: 0px 0px 3px #00000029;
		background: white;
	}
`;

const MemoInput = styled.textarea`
	width: 100%;
	height: 230px;
	padding: 1rem;
	box-sizing: border-box;
	border: none;
	border-bottom: 1px solid black;
`;

const SubmitButton = styled.button`
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

const Card = ({ onClick, ...v }) => {
	return (
		<Bcard
			{...v}
			onClick={onClick}
		/>
	);
};

const SearchPage = () => {
	const [input, setInput] = useState('');
	const [modalOnOff, setModalOnOff] = useState(-1);
	const [memo, setMemo] = useState('');
	const [data, setData] = useState([]);
	const [updateMemo] = businessCardApi.useSetMemoMutation();
	const { data: allData } = businessCardApi.useGetBusinessCardsQuery();
	const [getInfo] = businessCardApi.useGetBusinessCardInfoMutation();
	const [getByInfo] = searchApi.useGetBcardByInfoMutation();
	const [getByTag] = searchApi.useGetBcardByTagMutation();

	const onSearch = async () => {
		if (input === '') return;
		const {
			data: { users },
		} = input.includes('#') ? await getByTag(input.slice(1, -1)) : await getByInfo(input);

		setData(users);
	};

	const getDetailInfo = async (id) => {
		const {
			data: { user },
		} = await getInfo({ id });
		setModalOnOff(user);
	};

	const submitMemo = async () => {
		const {
			data: { code },
		} = await updateMemo({ id: modalOnOff.id, content: memo });
		console.log(code);
	};
	useEffect(() => {
		if (modalOnOff === -1) return;
		setMemo(modalOnOff?.content ?? '');
	}, [modalOnOff]);
	return (
		<>
			<Layout
				title='명함 모음집'
				headerTitleB='Business.zip'
			>
				<Container>
					<div style={{ position: 'absolute', left: '0px', height: '100%' }}>
						<LeftTitleLogo
							title='명함 검색'
							color='green'
						/>
					</div>
					<Wrapper>
						<div className='center'>
							<SearchWrapper>
								<Input
									placeholder='검색해보세요'
									value={input}
									onChange={(e) => setInput(e.target.value)}
								/>
								<SearchButton onClick={onSearch}>검색</SearchButton>
							</SearchWrapper>
							<HashTagWrapper>
								<HashTagStyle>#developer</HashTagStyle>
								<HashTagStyle>#designer</HashTagStyle>
								<HashTagStyle>#Backend</HashTagStyle>
								<HashTagStyle>#Frontend</HashTagStyle>
								<HashTagStyle>#Spring</HashTagStyle>
								<HashTagStyle>#React</HashTagStyle>
							</HashTagWrapper>
						</div>
						<CardsWrapper>
							<div className='cardList'>
								{data.length === 0 &&
									allData?.users.map((v) => (
										<Card
											{...v}
											onClick={() => getDetailInfo(v?.id)}
										/>
									))}
								{data &&
									data.map((v) => (
										<Card
											{...v}
											onClick={() => getDetailInfo(v?.id)}
										/>
									))}
							</div>
						</CardsWrapper>
					</Wrapper>
				</Container>
			</Layout>
			{modalOnOff !== -1 && (
				<Modal onClick={() => setModalOnOff(-1)}>
					<ModalWrapper className='mycard'>
						<div
							className='business'
							style={{ position: 'relative', width: '400px' }}
						>
							<Bcard {...modalOnOff} />
						</div>
						<MemoInput
							value={memo}
							placeholder='메모를 적어주세요'
							onChange={(e) => setMemo(e.target.value)}
						/>
						<SubmitButton onClick={submitMemo}>메모하기</SubmitButton>
					</ModalWrapper>
				</Modal>
			)}
		</>
	);
};

export default SearchPage;
