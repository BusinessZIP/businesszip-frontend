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
		<div>
			<h2>회원가입</h2>
			<p>Log in</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					errorMessage={errors.name?.message}
					placeholder='이름'
					{...register('name', {
						required: '이름을 입력해주세요',
					})}
				/>
				<Input
					errorMessage={errors.email?.message}
					placeholder='이메일'
					{...register('email', {
						required: '이메일을 입력해주세요',
						pattern: {
							value: /^[A-Za-z0-9._%+-]+@[\S+.]+$/,
							message: '이메일형식만 사용할 수 있습니다.',
						},
					})}
				/>
				<Input
					errorMessage={errors.password?.message}
					type='password'
					placeholder='비밀번호'
					{...register('password', {
						required: '비밀번호를 입력해주세요.',
					})}
				/>
				<Input
					errorMessage={errors.phoneNumber?.message}
					placeholder='전화번호'
					{...register('phoneNumber', {
						required: '전화번호를 입력해주세요',
						pattern: {
							value: /^([\d]{3}-[\d]{4}-[\d]{4}|[\d]{11})$/,
							message: '올바른 전화번호가 아닙니다.',
						},
					})}
				/>
				<Button>회원가입</Button>
			</form>
		</div>
	);
}

export default SignUpPage;
