import styled from 'styled-components';

const MainStyle = styled.div`
	.card {
		width: 400px;
		height: 230px;
		margin: auto;
		margin-top: 283px;
		background-color: pink;
	}
`;

const ShareButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 30px auto;
	cursor: pointer;
	background: #4365db;
	border-radius: 20px;
	font-family: 'MICEGothic';
	font-size: 1.1rem;
	color: white;
	width: 100%;
	border: none;
	padding: 1.6rem 0px;
	width: 200px;

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

function NameCard() {
	return (
		<MainStyle>
			<div className='wrap'>
				<div className='card'>Bcard 들어올 곳</div>
			</div>
			<ShareButton>명함모음집에 추가하기</ShareButton>
		</MainStyle>
	);
}

export default NameCard;
