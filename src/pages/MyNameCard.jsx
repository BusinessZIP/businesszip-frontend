import { confirmAlert } from 'react-confirm-alert';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import myPageApi from '../app/api/myPageApi';
import Bcard from '../components/bcard';
import Layout from '../components/layout';
import LeftTitleLogo from '../components/leftTitleLogo';
import '../styles/confirm.css';

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
		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div className='custom-ui'>
						<h1>
							원하시는 방식을
							<br />
							선택해주세요.
						</h1>
						<p>
							D.I.Y는 원하는 정보를 자유롭게 입력할 수 있습니다.
							<br />
							Form은 기본 정보만 입력하시면 됩니다.
						</p>

						<button
							type='submit'
							onClick={() => {
								navigate('/createDiy');
								onClose();
							}}
						>
							D.I.Y
						</button>
						<button
							type='submit'
							onClick={() => {
								navigate('/selectDesign');
								onClose();
							}}
						>
							Form
						</button>
					</div>
				);
			},
		});
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
