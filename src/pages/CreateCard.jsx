import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import myPageApi from '../app/api/myPageApi';
import Bcard from '../components/bcard';
import Modal from '../components/modal';
import { CARD_TYPE_MAPS } from '../utils/cardType';

import Input from '@/components/input';
import Layout from '@/components/layout';

const Container = styled.div`
	position: relative;
	display: flex;
	height: calc(100vh - 80px);
	flex-direction: column;
	justify-self: center;
	align-items: center;
	padding: 1rem;
	box-sizing: border-box;
`;

const BackColor = styled.div`
	background-color: white;
`;

const FormWrapper = styled.div`
	margin-top: 40px;
	width: 40%;
	display: flex;
	flex-direction: column;
	height: 90%;
	justify-content: space-between;
	padding: 3rem 2rem 2rem;
	box-sizing: border-box;
	background: rgba(255, 255, 255, 0.5);
	box-shadow: 0 4px 5px #a5a5a5;

	form {
		display: flex;
		height: 90%;
		flex-direction: column;
		justify-content: space-between;
	}
	@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
		backdrop-filter: blur(16px);
	}
	border-radius: 30px;
`;

const Title = styled.h2`
	color: black;
	font-size: 1.4rem;
	font-family: 'MICEGothic';
`;

const BusinessCardInput = styled(Input)`
	color: '#838383';
	font-size: 1rem;
	font-family: 'MICEGothic';
	::placeholder {
		font-size: 1rem;
		font-family: 'MICEGothic';
		color: '#838383';
	}
	height: 3rem;
	margin: 0.5rem 0;
`;

const BusinessCardButton = styled.button`
	cursor: pointer;
	background: #2474d2;
	border-radius: 20px;
	font-size: 1.1rem;
	font-family: 'MICEGothic';
	color: white;
	width: 100%;
	border: none;
	padding: 1rem 0px;
	margin-top: 1em;
	&:hover,
	&:focus {
		color: white;
		box-shadow: inset 15em 0 0 0 #1c5ca8;
		background: #1c5ca8;
		transition: all 0.5s;
		&:before {
			width: 100%;
		}
	}
`;

const HashTagStyle = styled.div`
	.tagone {
		max-width: 10vw;
		min-width: 3vw;
		padding: 0.5rem 0.6rem;
		margin: 0 3px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		display: flex;
		align-items: center;
		background: rgba(36, 116, 210, 0.83);
		box-shadow: 2px 3px 10px #a5a5a5;
		border-radius: 20px;
		cursor: pointer;
		:hover {
			opacity: 50%;
		}
	}
`;

const HashtagWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.2rem;
	overflow-x: auto;
	width: 100%;
	input {
		min-width: 60%;
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
	margin-top: 1rem;
	border: none;
	padding: 1rem 0px;
	&:hover,
	&:focus {
		color: white;
		box-shadow: inset 15em 0 0 0 #195193;
		background: #195193;
		transition: all 0.5s;
		&:before {
			width: 100%;
		}
	}
`;

function CreateCard() {
	const navigate = useNavigate();
	const [hashtag, setHashtag] = useState([]);
	const [modalOnOff, setModalOnOff] = useState(false);
	const [submitData, setSubmitData] = useState({});
	const { type } = useLocation().state;
	console.log(type);
	const [createBcard] = myPageApi.useCreateBusinessCardMutation();
	const [input, setInput] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		reValidateMode: 'onChange',
		defaultValues: {},
	});

	const addHashtag = (event) => {
		if (event.keyCode === 13 && input !== '') {
			if (!hashtag.includes(input)) setHashtag((v) => [...v, input]);
			setInput('');
		}
	};

	const deleteHashtag = (content) => {
		setHashtag(hashtag.filter((v) => v !== content));
	};

	const onSubmit = (data) => {
		setSubmitData(data);
		setModalOnOff(true);
	};

	const createCard = async () => {
		const {
			data: { code },
		} = await createBcard({
			...{ ...submitData, background: CARD_TYPE_MAPS[type], tags: hashtag },
		});
		if (code === 201) {
			navigate('/mypage');
		}
	};

	return (
		<>
			<BackColor>
				<Layout
					title='내 명함'
					background='none'
				/>
				<Container>
					<FormWrapper>
						<Title>내 명함 만들기</Title>
						<form>
							<BusinessCardInput
								color='#838383'
								placeholder='이름'
								{...register('name', {})}
							/>
							<BusinessCardInput
								color='#838383'
								placeholder='직업'
								{...register('job', {})}
							/>
							<BusinessCardInput
								errorMessage={errors.phoneNumber?.message}
								color='#838383'
								placeholder='전화번호'
								{...register('phone', {
									pattern: {
										value: /^([\d]{3}-[\d]{4}-[\d]{4}|[\d]{11})$/,
										message: '올바른 전화번호가 아닙니다.',
									},
								})}
							/>
							<BusinessCardInput
								errorMessage={errors.email?.message}
								color='#838383'
								placeholder='이메일'
								{...register('email', {
									pattern: {
										value: /^[A-Za-z0-9._%+-]+@[\S+.]+$/,
										message: '이메일형식만 사용할 수 있습니다.',
									},
								})}
							/>
							<BusinessCardInput
								color='#838383'
								placeholder='주소'
								{...register('address', {})}
							/>
							<HashtagWrapper>
								{hashtag &&
									hashtag.map((content) => (
										<HashTagStyle onClick={() => deleteHashtag(content)}>
											<div className='tagone'>#{content}</div>
										</HashTagStyle>
									))}
								<BusinessCardInput
									color='#838383'
									placeholder='태그'
									onKeyDown={addHashtag}
									value={input}
									onChange={(e) => setInput(e.target.value)}
								/>
							</HashtagWrapper>
						</form>
						<BusinessCardButton onClick={handleSubmit(onSubmit)}>
							등록하기
						</BusinessCardButton>
					</FormWrapper>
				</Container>
			</BackColor>
			{modalOnOff && (
				<Modal onClick={() => setModalOnOff(false)}>
					<div
						className='mycard'
						style={{ position: 'relative', width: '400px' }}
					>
						<Bcard
							{...{ ...submitData, background: CARD_TYPE_MAPS[type], tags: hashtag }}
						/>
					</div>
					<BcardButton onClick={createCard}>확인</BcardButton>
				</Modal>
			)}
		</>
	);
}

export default CreateCard;
