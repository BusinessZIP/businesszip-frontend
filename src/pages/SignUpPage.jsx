import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import Input from '@/components/input';

const Container = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
		69.01deg,
		rgba(34, 74, 215, 0.18) 17.08%,
		rgba(127, 182, 232, 0.85) 54.36%
	);
`;

const FormWrapper = styled.div`
	position: absolute;
	width: 40%;
	height: 70%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 5rem 3rem 3rem;
	box-sizing: border-box;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background: rgba(255, 255, 255, 0.5);
	form {
		height: 60%;
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
	color: black;
	font-family: 'MICEGothic';
	font-size: 1.5rem;
`;

const SignUpInput = styled(Input)`
	color: black;
	font-family: 'MICEGothic';
	font-size: 1rem;
	::placeholder {
		font-family: 'MICEGothic';
		font-size: 1rem;
		color: gray;
	}
	height: 4rem;
`;

const SignInButton = styled.button`
	cursor: pointer;
	background: #4365db;
	border-radius: 20px;
	font-family: 'MICEGothic';
	font-size: 1.1rem;
	color: white;
	width: 100%;
	border: none;
	padding: 1.6rem 0px;

	&:hover,
	&:focus {
		color: white;
		box-shadow: inset 15em 0 0 0 #2e4699;
		background: #2e4699;
		transition: all 0.5s;
		&:before {
			width: 100%;
		}
	}
`;

function SignUpPage() {
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
		<Container>
			<FormWrapper>
				<Title>회원가입</Title>
				<form>
					<SignUpInput
						errorMessage={errors.name?.message}
						color='#ffffff'
						placeholder='이름'
						{...register('name', {
							required: '이름을 입력해주세요',
						})}
					/>
					<SignUpInput
						errorMessage={errors.phoneNumber?.message}
						color='#ffffff'
						placeholder='전화번호'
						{...register('phoneNumber', {
							required: '전화번호를 입력해주세요',
							pattern: {
								value: /^([\d]{3}-[\d]{4}-[\d]{4}|[\d]{11})$/,
								message: '올바른 전화번호가 아닙니다.',
							},
						})}
					/>
					<SignUpInput
						errorMessage={errors.email?.message}
						color='#ffffff'
						placeholder='아이디'
						{...register('email', {
							required: '이메일을 입력해주세요',
							pattern: {
								value: /^[A-Za-z0-9._%+-]+@[\S+.]+$/,
								message: '이메일형식만 사용할 수 있습니다.',
							},
						})}
					/>
					<SignUpInput
						errorMessage={errors.password?.message}
						color='#ffffff'
						type='password'
						placeholder='비밀번호'
						{...register('password', {
							required: '비밀번호를 입력해주세요.',
						})}
					/>
				</form>
				<SignInButton onClick={handleSubmit(onSubmit)}>가입하기</SignInButton>
			</FormWrapper>
		</Container>
	);
}

export default SignUpPage;
