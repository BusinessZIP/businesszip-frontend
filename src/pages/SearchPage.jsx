import styled from 'styled-components';

import Layout from '../components/layout';
import LeftTitleLogo from '../components/leftTitleLogo';

const Container = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-self: center;
	align-items: center;
	.center {
		display: flex;
		flex-direction: column;
		justify-self: center;
		align-items: center;
	}
	.cardList {
		display: flex;
		flex-direction: row nowrap;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
	}
`;

const Wrapper = styled.div`
	margin-left: 30vmin;
	display: flex;
	flex-direction: column;
	padding: 2.5rem;
	gap: 3rem;
`;

const HashTagWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
`;

const CardsWrapper = styled.div`
	display: inline-flex;
	align-items: center;
`;

const SearchWrapper = styled.div`
	display: flex;
	gap: 1rem;
	margin: 30px 0;
`;

const SearchButton = styled.button`
	color: white;
	width: 5vw;
	height: 6vh;
	font-family: 'MICEGothic Bold';
	font-size: 1.6rem;
	border: none;
	background: rgba(23, 122, 75, 0.83);
	box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.12);
	border-radius: 30px;
`;

const Input = styled.input`
	border: none;
	width: 30vw;
	height: 6vh;
	font-family: 'MICEGothic';
	font-size: 1.6rem;
	padding: 1rem 2rem;
	box-sizing: border-box;
	background: #ffffff;
	box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.12);
	border-radius: 30px;
`;

const HashTagStyle = styled.div`
	width: 6vw;
	padding: 0.6rem 2rem;
	text-align: center;
	background: #edf3eb;
	box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.12);
	border-radius: 20px;
`;

const CardStyle = styled.div`
	/* img {
		cursor: pointer;
		display: flex;
		width: 400px;
		padding: 20px 50px;
	} */

	@import url(https://fonts.googleapis.com/css?family=Raleway:300,700);
	@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
	figure.snip {
		font-family: 'Raleway', Arial, sans-serif;
		position: relative;
		overflow: hidden;
		margin: 10px;
		min-width: 400px;
		max-width: 400px;
		width: 100%;
		color: #ffffff;
		text-align: left;
		font-size: 16px;
		background-color: #000000;
	}
	figure.snip * {
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-transition: all 0.35s ease;
		transition: all 0.35s ease;
	}
	figure.snip img {
		max-width: 100%;
		backface-visibility: hidden;
		vertical-align: top;
	}
	figure.snip:after,
	figure.snip figcaption {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	figure.snip:after {
		content: '';
		background-color: rgba(0, 0, 0, 0.65);
		-webkit-transition: all 0.35s ease;
		transition: all 0.35s ease;
		opacity: 0;
	}
	figure.snip figcaption {
		z-index: 1;
		padding: 40px;
	}
	figure.snip p,
	figure.snip .links {
		width: 100%;
		margin: 5px 0;
		padding: 0;
	}
	figure.snip p {
		line-height: 1.1em;
		font-weight: 700;
		font-size: 1.4em;
		text-transform: uppercase;
		opacity: 0;
	}
	figure.snip p {
		font-size: 0.8em;
		font-weight: 300;
		letter-spacing: 1px;
		opacity: 0;
		top: 50%;
		-webkit-transform: translateY(40px);
		transform: translateY(40px);
	}
	figure.snip i {
		position: absolute;
		bottom: 10px;
		right: 10px;
		padding: 20px 25px;
		font-size: 34px;
		opacity: 0;
		-webkit-transform: translateX(-10px);
		transform: translateX(-10px);
	}
	figure.snip a {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
	}
	figure.snip:hover img,
	figure.snip.hover img {
		zoom: 1;
		filter: blur(3px);
		-webkit-opacity: 0.5;
		opacity: 0.5;
	}
	figure.snip:hover:after,
	figure.snip.hover:after {
		opacity: 1;
		position: absolute;
		top: 10px;
		bottom: 10px;
		left: 10px;
		right: 10px;
	}

	figure.snip:hover p,
	figure.snip.hover p,
	figure.snip:hover i,
	figure.snip.hover i {
		-webkit-transform: translate(0px, 0px);
		transform: translate(0px, 0px);
		opacity: 1;
	}
`;

const HashTag = () => {
	return <HashTagStyle>#develop</HashTagStyle>;
};

const Card = () => {
	return (
		<CardStyle>
			<figure className='snip'>
				<img
					src='https://identity.snu.ac.kr/webdata/uploads/identity/image/2021/06/5-6-5.png'
					alt='sample'
				/>
				<figcaption>
					<p
						className='name'
						id='up'
					>
						이름임
					</p>
					<p
						className='job'
						id='up'
					>
						Kakao
					</p>
					<p>#develop</p>
				</figcaption>
			</figure>
		</CardStyle>
	);
};

const SearchPage = () => {
	return (
		<Layout title='명함 검색'>
			<Container>
				<div style={{ position: 'absolute', left: '0px', height: '100%' }}>
					<LeftTitleLogo
						title='명함 검색'
						color='green'
					/>
				</div>
				<Wrapper>
					<div className='center'>
						<SearchWrapper>
							<Input placeholder='검색해보세요' />
							<SearchButton>검색</SearchButton>
						</SearchWrapper>
						<HashTagWrapper>
							{Array.from({ length: 6 }).map(() => (
								<HashTag />
							))}
						</HashTagWrapper>
					</div>
					<CardsWrapper>
						<div className='cardList'>
							{Array.from({ length: 3 }).map(() => (
								<Card />
							))}
						</div>
					</CardsWrapper>
				</Wrapper>
			</Container>
		</Layout>
	);
};

export default SearchPage;
