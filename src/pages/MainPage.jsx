import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Block1Style = styled.div`
	@keyframes fadeInUp {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0;
			transform: translate3d(0, 100%, 0);
		}
		to {
			opacity: 1;
			transform: translateZ(0);
		}
	}
	.container > div {
		margin: 0 40px;
	}

	.block2 {
		position: absolute;
		width: 608px;
		min-height: 347px;
		left: 131px;
		top: 98px;
		background: linear-gradient(118.87deg, #7998e6 19.02%, rgba(186, 214, 216, 0.76) 94.46%);
		border-radius: 15px;
		color: white;
		animation: fadeInUp 2s;
	}

	.block1 {
		position: absolute;
		width: 608px;
		height: 317px;
		left: 701px;
		top: 174px;
		background: linear-gradient(
			61.62deg,
			rgba(113, 164, 241, 0.38) 32.4%,
			rgba(40, 96, 206, 0.52) 60.23%,
			rgba(24, 88, 214, 0.61) 71.23%
		);
		border-radius: 15px;
		animation: fadeInUp 1.3s;
	}

	.block4 {
		position: absolute;
		width: 608px;
		height: 317px;
		left: 100px;
		top: 398px;
		background: linear-gradient(241.57deg, #7fb6e8 9.49%, rgba(34, 74, 215, 0.84) 88.86%);
		border-radius: 15px;
		animation: fadeInUp 4s;
	}

	.block3 {
		position: absolute;
		width: 608px;
		height: 317px;
		left: 659px;
		top: 440px;

		background: linear-gradient(
			241.57deg,
			rgba(189, 218, 244, 0.76) 14.49%,
			rgba(124, 152, 254, 0.8) 78.86%
		);
		border-radius: 15px;
		animation: fadeInUp 3s;
	}

	.fontstyle {
		font-family: 'MICEGothic Bold';
		font-style: normal;
		font-weight: 700;
		font-size: 35px;
		line-height: 40px;
		color: #ffffff;
		text-shadow: 6px 3px 4px rgba(0, 0, 0, 0.13);
	}

	span:hover {
		cursor: pointer;
	}
`;

function MainPage() {
	const navigate = useNavigate();

	const goSignUpPage = () => navigate('/signUp');

	const goSignInPage = () => navigate('/signIn');

	const goSearchPage = () => navigate('/search');

	const goMyPage = () => navigate('/mypage');

	return (
		<Block1Style>
			<div className='container'>
				<div className='block1'>
					<div
						className='fontstyle'
						id='1'
						style={{ padding: '50px 0 0 424px' }}
						role='button'
						tabIndex={0}
						onClick={goSearchPage}
						onKeyDown={goSearchPage}
					>
						<span>명함 검색</span>
					</div>
				</div>
				<div className='block2'>
					<div
						className='fontstyle'
						id='2'
						style={{ padding: '57px 0 0 46px' }}
						role='button'
						tabIndex={0}
						onClick={goMyPage}
						onKeyDown={goMyPage}
					>
						<span>MY NAME</span>
						<br />
						<span>CARD</span>
					</div>
				</div>
				<div className='block3' />
				<div className='block4'>
					<div
						className='fontstyle'
						id='4'
						style={{ padding: '218px 0 0 46px' }}
					>
						<span
							role='button'
							tabIndex={0}
							onClick={goSignUpPage}
							onKeyDown={goSignUpPage}
						>
							회원가입
						</span>
						&nbsp;/&nbsp;
						<span
							role='button'
							tabIndex={0}
							onClick={goSignInPage}
							onKeyDown={goSignInPage}
						>
							로그인
						</span>
					</div>
				</div>
			</div>
		</Block1Style>
	);
}

export default MainPage;
