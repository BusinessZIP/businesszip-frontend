import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import Input from '@/components/input';
import Layout from '@/components/layout';

const Container = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-self: center;
	align-items: center;
	padding: 50px 0;
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
	width: 80%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 5rem 3rem 3rem;
	box-sizing: border-box;
	background: rgba(255, 255, 255, 0.5);
	form {
		display: flex;
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
`;

const BusinessCardInput = styled(Input)`
	color: #f3f3f3;
	font-size: 1.2rem;
	::placeholder {
		font-size: 1.2rem;
		color: #f3f3f3;
	}
	height: 4rem;
	margin: 1.5rem 0;
`;

const BusinessCardButton = styled.button`
	background: #e67a7a;
	border-radius: 20px;
	color: white;
	width: 100%;
	border: none;
	padding: 1.6rem 0px;
`;

function CreateCard() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		reValidateMode: 'onChange',
		defaultValues: {},
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<BackColor>
			<Layout
				title='내 명함'
				transparent
			/>
			<Container>
				<FormWrapper>
					<Title>내 명함 만들기</Title>
					<form>
						<BusinessCardInput
							color='#ffffff'
							placeholder='이름'
						/>
						<BusinessCardInput
							color='#ffffff'
							placeholder='직업'
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
						/>
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
