import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import Input from '@/components/input';

const Button = styled.button`
	background: #0a3453;
	color: white;
	width: 100%;
	border: none;
	border-radius: 33px;
`;

function SignInPage() {
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
		<div>
			<h2>로그인</h2>
			<p>Log in</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					errorMessage={errors.email?.message}
					placeholder='email'
					{...register('email', {
						required: '이메일 입력해주세요',
						pattern: {
							value: /^[A-Za-z0-9._%+-]+@[\S+.]+$/,
							message: '이메일형식만 사용할 수 있습니다.',
						},
					})}
				/>
				<Input
					errorMessage={errors.password?.message}
					type='password'
					placeholder='PW'
					{...register('password', {
						required: '비밀번호를 입력해주세요.',
					})}
				/>
				<Button>로그인</Button>
			</form>
		</div>
	);
}

export default SignInPage;
