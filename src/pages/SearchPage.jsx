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
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 4rem;
	gap: 3rem;
`;

const HashTagWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
`;

const SearchWrapper = styled.div`
	display: flex;
	gap: 1rem;
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

const HashTag = () => {
	return <HashTagStyle>#develop</HashTagStyle>;
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
					<SearchWrapper>
						<Input placeholder='검색해보세요' />
						<SearchButton>검색</SearchButton>
					</SearchWrapper>
					<HashTagWrapper>
						{Array.from({ length: 6 }).map(() => (
							<HashTag />
						))}
					</HashTagWrapper>
				</Wrapper>
			</Container>
		</Layout>
	);
};

export default SearchPage;
