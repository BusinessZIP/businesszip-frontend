import styled from 'styled-components';

const Container = styled.div`
	width: 400px;
	height: 230px;
	background: ${({ background }) => (background ? `url(${background})` : 'whitesmoke')};
	color: black;
	font-family: 'MICEGothic';
	.grid-container {
		display: grid;
		width: 400px;
		grid-template-columns: auto auto;
		padding: 10px 27px;
		justify-content: center;
	}

	.grid-container {
		border-radius: 3px black solid;
		position: absolute;
		bottom: 0;
		font-size: 12px;
	}
	#grid {
		padding: 5px 0;
	}

	.name {
		font-family: 'MICEGothic Bold';
		font-size: 24px;
		line-height: 29px;
		position: absolute;
		left: 27px;
		top: 25px;
	}
	.job {
		font-size: 20px;
		line-height: 24px;
		position: absolute;
		left: 27px;
		top: 58px;
		font-weight: 400;
	}
	.qr {
		position: absolute;
		width: 40px;
		height: 40px;
		left: 333px;
		top: 25px;
		background-color: gray;
	}
`;

const Bcard = ({ background }) => {
	return (
		<Container background={background}>
			<div className='all'>
				<div className='name'>이름임</div>
				<div className='job'>직군</div>
				<div className='qr'>qr</div>
				<div className='grid-container'>
					<div
						className='number'
						id='grid'
					>
						N 010-1234-5678
					</div>
					<div
						className='address'
						id='grid'
					>
						A 서울특별시 동작구 상도로 37길 43 어쩌구호
					</div>
					<div
						className='tag'
						id='grid'
					>
						#develop #mynameis #secret
					</div>
					<div
						className='mail'
						id='grid'
					>
						E ink000706@naver.com
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Bcard;
