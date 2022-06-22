import styled from 'styled-components';

const Block1Style = styled.div`
	@keyframes fadeInUp {
		0% {
			opacity: 0;
			transform: translate3d(0, 100%, 0);
		}
		to {
			opacity: 1;
			transform: translateZ(0);
		}
	}
	/* .container > div {
		animation: fadeInUp 1s;
	} */

	.block2 {
		position: absolute;
		width: 758px;
		min-height: 427px;
		left: 71px;
		top: 33px;
		background: linear-gradient(
			118.87deg,
			#e67979 19.02%,
			rgba(222, 161, 68, 0.5625) 64.99%,
			rgba(240, 210, 164, 0.76) 94.46%
		);
		border-radius: 15px;
		color: white;
		animation-delay: 1s;
		animation: fadeInUp 1s;
	}

	.block1 {
		position: absolute;
		width: 636px;
		height: 390px;
		left: 781px;
		top: 144px;

		background: linear-gradient(61.62deg, #a9de97 26.7%, rgba(23, 122, 75, 0.83) 71.23%);
		border-radius: 15px;
		animation: fadeInUp 1s;
	}

	.block4 {
		position: absolute;
		width: 720px;
		height: 412px;
		left: 24px;
		top: 391px;

		background: linear-gradient(241.57deg, #7fb6e8 14.49%, rgba(34, 74, 215, 0.84) 78.86%);
		border-radius: 15px;
	}

	.block3 {
		position: absolute;
		width: 636px;
		height: 390px;
		left: 689px;
		top: 440px;

		background: linear-gradient(109.97deg, #f3a9a4 15.03%, rgba(89, 94, 208, 0.56) 98.92%);
		border-radius: 15px;
	}

	.fontstyle {
		font-family: 'hansans-medium';
		font-style: normal;
		font-weight: 700;
		font-size: 50px;
		line-height: 60px;

		color: #ffffff;

		text-shadow: 6px 3px 4px rgba(0, 0, 0, 0.13);
	}

	.container {
		background-color: black;
		position: relative;
	}
`;

function MainPage() {
	return (
		<Block1Style>
			<div className='container'>
				<div className='block1'>
					<div className='fontstyle'>명함 검색</div>
				</div>
				<div className='block2'>
					<div className='fontstyle'>
						MY NAME
						<br />
						CARD
					</div>
				</div>
				<div className='block3'>
					<div className='fontstyle'>기만자들~</div>
				</div>
				<div className='block4'>
					<div className='fontstyle'>로그인</div>
				</div>
			</div>
		</Block1Style>
	);
}

export default MainPage;
