import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Input from '@/components/input';

const Container = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background: linear-gradient(69.01deg, rgba(34, 74, 215, 0.84) 17.08%, #7fb6e8 93.54%);
`;

const FormWrapper = styled.div`
	position: absolute;
	width: 60%;
	height: 80%;
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
		height: 40%;
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
	font-family: 'MICEGothic';
	font-size: 2rem;
`;

const SignInInput = styled(Input)`
	color: #e1e1e1;
	font-family: 'MICEGothic';
	font-size: 1.2rem;
	::placeholder {
		font-family: 'MICEGothic';
		font-size: 1.2rem;
		color: #e1e1e1;
	}
	height: 4rem;
`;

const SignInButton = styled.button`
	cursor: pointer;
	background: #4365db;
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
		box-shadow: inset 15em 0 0 0 #2e4699;
		background: #2e4699;
		transition: all 0.5s;
		&:before {
			width: 100%;
		}
	}
`;

const SignUpButton = styled(SignInButton)`
	cursor: pointer;
	font-family: 'MICEGothic';
	font-size: 1.2rem;
	background: #6390e1;
	&:hover,
	&:focus {
		color: white;
		box-shadow: inset 15em 0 0 0 #45649d;
		background: #45649d;
		transition: all 0.5s;
		&:before {
			width: 100%;
		}
	}
`;

function SignInPage() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		reValidateMode: 'onChange',
		defaultValues: {},
	});

	const goSignUpPage = () => navigate('/signUp');

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Container>
			<FormWrapper>
				<Title>로그인</Title>
				<form>
					<SignInInput
						errorMessage={errors.email?.message}
						color='#ffffff'
						placeholder='ID'
						{...register('email', {
							required: '이메일 입력해주세요',
							pattern: {
								value: /^[A-Za-z0-9._%+-]+@[\S+.]+$/,
								message: '이메일형식만 사용할 수 있습니다.',
							},
						})}
					/>
					<SignInInput
						errorMessage={errors.password?.message}
						color='#ffffff'
						type='password'
						placeholder='PW'
						{...register('password', {
							required: '비밀번호를 입력해주세요.',
						})}
					/>
				</form>
				<SignInButton onClick={handleSubmit(onSubmit)}>로그인 하기</SignInButton>
				<SignUpButton onClick={goSignUpPage}>회원가입 하기</SignUpButton>
			</FormWrapper>
		</Container>
	);
}

export default SignInPage;
