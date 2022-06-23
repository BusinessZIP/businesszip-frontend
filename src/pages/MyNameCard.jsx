import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import myPageApi from '../app/api/myPageApi';
import Bcard from '../components/bcard';
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
	padding: 2.5rem;
	gap: 3rem;
	.grid-container {
		width: 346px;
	}
	.number,
	.address,
	.tag,
	.mail {
		padding: 5px 5px;
	}
`;

const AddButton = styled.button`
	border: none;
	width: 400px;
	height: 230px;
	background: whitesmoke;
	font-size: 4rem;
	cursor: pointer;
	:hover {
		opacity: 50%;
	}
`;

function MyNameCard() {
	const navigate = useNavigate();
	const { data } = myPageApi.useGetMyBusinessCardQuery();
	console.log(data);
	const handleClickBasic = () => {
		navigate('/selectDesign');
	};

	return (
		<Layout
			title='내 명함'
			headerTitleB='My Name Card'
		>
			<Container>
				<div style={{ position: 'absolute', left: '0px', height: '100%' }}>
					<LeftTitleLogo />
				</div>
				<Wrapper>
					{data?.mycards !== undefined &&
						data.mycards?.map((v) => (
							<div
								className='mycard'
								style={{ position: 'relative', width: '400px' }}
							>
								<Link
									to='/shareCard'
									state={{
										id: v.id,
									}}
								>
									<Bcard {...v} />
								</Link>
							</div>
						))}
					<AddButton onClick={handleClickBasic}>+</AddButton>
				</Wrapper>
			</Container>
		</Layout>
	);
}

export default MyNameCard;
