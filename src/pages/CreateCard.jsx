import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Input from '@/components/input';
import Layout from '@/components/layout';
// import businessCardApi from '../app/api/businessCardApi';

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
	background: linear-gradient(
		63.49deg,
		#e67979 10.45%,
		rgba(222, 161, 68, 0.5625) 50.68%,
		rgba(240, 210, 164, 0.76) 93.1%
	);
`;

const FormWrapper = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-between;
	padding: 3rem 2rem 2rem;
	box-sizing: border-box;
	background: rgba(255, 255, 255, 0.5);
	form {
		display: flex;
		height: 80%;
		flex-direction: column;
		justify-content: space-between;
	}
	@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
		backdrop-filter: blur(16px);
	}
	border-radius: 30px;
`;

const Title = styled.h2`
	color: white;
	font-size: 2rem;
	font-family: 'MICEGothic';
`;

const BusinessCardInput = styled(Input)`
	color: #f3f3f3;
	font-size: 1.2rem;
	font-family: 'MICEGothic';
	::placeholder {
		font-size: 1.2rem;
		font-family: 'MICEGothic';
		color: #f3f3f3;
	}
	/* height: 4rem; */
	margin: 1.5rem 0;
`;

const BusinessCardButton = styled.button`
	cursor: pointer;
	background: #e67a7a;
	border-radius: 20px;
	font-size: 1.2rem;
	font-family: 'MICEGothic';
	color: white;
	width: 100%;
	border: none;
	padding: 1.6rem 0px;
	&:hover,
	&:focus {
		color: white;
		box-shadow: inset 15em 0 0 0 #b86161;
		background: #b86161;
		transition: all 0.5s;
		&:before {
			width: 100%;
		}
	}
`;

const HashTagStyle = styled.div`
	max-width: 6vw;
	min-width: 3vw;
	padding: 0.2rem 0.6rem;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	display: flex;
	align-items: center;
	background: #edf3eb;
	box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.12);
	border-radius: 20px;
	cursor: pointer;
	:hover {
		opacity: 50%;
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

function CreateCard() {
	const [hashtag, setHashtag] = useState([]);
	const { type } = useLocation().state;
	console.log(type);
	// const [createBcard] = businessCardApi.useCreateBusinessCardMutation();
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
		console.log(data);
		// createBcard({ ...data, tags: hashtag, background: '' });
	};

	return (
		<BackColor>
			<Layout
				title='내 명함'
				background='none'
				transparent
			/>
			<Container>
				<FormWrapper>
					<Title>내 명함 만들기</Title>
					<form>
						<BusinessCardInput
							color='#ffffff'
							placeholder='이름'
							{...register('name', {})}
						/>
						<BusinessCardInput
							color='#ffffff'
							placeholder='직업'
							{...register('job', {})}
						/>
						<BusinessCardInput
							errorMessage={errors.phoneNumber?.message}
							color='#ffffff'
							placeholder='전화번호'
							{...register('phoneNumber', {
								pattern: {
									value: /^([\d]{3}-[\d]{4}-[\d]{4}|[\d]{11})$/,
									message: '올바른 전화번호가 아닙니다.',
								},
							})}
						/>
						<BusinessCardInput
							errorMessage={errors.email?.message}
							color='#ffffff'
							placeholder='이메일'
							{...register('email', {
								pattern: {
									value: /^[A-Za-z0-9._%+-]+@[\S+.]+$/,
									message: '이메일형식만 사용할 수 있습니다.',
								},
							})}
						/>
						<BusinessCardInput
							color='#ffffff'
							placeholder='주소'
							{...register('address', {})}
						/>
						<HashtagWrapper>
							{hashtag &&
								hashtag.map((content) => (
									<HashTagStyle onClick={() => deleteHashtag(content)}>
										#{content}
									</HashTagStyle>
								))}
							<BusinessCardInput
								color='#ffffff'
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
	);
}

export default CreateCard;
