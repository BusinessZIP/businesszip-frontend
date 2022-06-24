/* eslint-disable no-use-before-define */
import { fabric } from 'fabric';
import { useRef, forwardRef, useCallback, useImperativeHandle } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import myPageApi from '../app/api/myPageApi';
import Layout from '../components/layout';
import { CARD_TYPE_MAPS } from '../utils/cardType';

const Container = styled.div`
	position: relative;
	display: flex;
	height: calc(100vh - 80px);
	flex-direction: column;
	justify-self: center;
	align-items: center;
	padding: 1rem;
	box-sizing: border-box;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2.5rem;
	gap: 3rem;
	canvas:nth-child(1) {
		background: ${({ background }) => `url(${background})`};
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	* {
		text-align: center;
	}
	button,
	label {
		cursor: pointer;
		background: #2474d2;
		font-family: 'MICEGothic';
		font-size: 1.2rem;
		border-radius: 20px;
		color: white;
		width: 100%;
		margin-top: 1rem;
		border: none;
		padding: 1rem 0px;
		&:hover,
		&:focus {
			color: white;
			box-shadow: inset 15em 0 0 0 #195193;
			background: #195193;
			transition: all 0.5s;
			&:before {
				width: 100%;
			}
		}
	}
`;

const SaveButton = styled.button`
	cursor: pointer;
	background: #2474d2;
	font-family: 'MICEGothic';
	font-size: 1.2rem;
	border-radius: 20px;
	color: white;
	width: 100%;
	margin-top: 1rem;
	border: none;
	padding: 1rem 0px;
	&:hover,
	&:focus {
		color: white;
		box-shadow: inset 15em 0 0 0 #195193;
		background: #195193;
		transition: all 0.5s;
		&:before {
			width: 100%;
		}
	}
`;

const useFabric = (ref) => {
	const canvas = useRef(null);
	useImperativeHandle(ref, () => {
		return canvas.current;
	});
	const fabricRef = useCallback((element) => {
		// if (!element) return canvas.current?.dispose();
		/* eslint-disable no-new */
		canvas.current = new fabric.Canvas(element);
	}, []);
	return fabricRef;
};

const MyFabric = forwardRef((props, ref) => {
	const fabricRef = useFabric(ref);
	return (
		<canvas
			ref={fabricRef}
			width={400}
			height={230}
		/>
	);
});

MyFabric.displayName = 'fabric';

const MyToolKit = (props) => {
	const { canvas } = props;

	const handleImage = (e) => {
		const reader = new FileReader();
		const file = e.target.files[0];
		reader.onload = () => {
			new fabric.Image.fromURL(reader.result, (image) => {
				image.scale(0.75);
				canvas.current.add(image);
				canvas.current.renderAll();
			});
		};
		reader.readAsDataURL(file);
	};

	const drawText = () => {
		const text = new fabric.IText('hello world', {
			left: 100,
			top: 100,
			fontFamily: 'sans-serif',
		});
		canvas.current.add(text);
	};
	return (
		<ButtonWrapper>
			<button
				type='button'
				onClick={drawText}
			>
				text
			</button>
			{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
			<label htmlFor='upload'>image</label>
			<input
				type='file'
				id='upload'
				onChange={handleImage}
				hidden
			/>
		</ButtonWrapper>
	);
};

const CreateDiyPage = () => {
	const { type } = useLocation().state;
	const navigate = useNavigate();
	const canvas = useRef(null);
	const [createBcard] = myPageApi.useCreateBusinessCardMutation();
	const createCard = async () => {
		const {
			data: { code },
		} = await createBcard({
			...{ background: CARD_TYPE_MAPS[type], url: JSON.stringify(canvas.current.toJSON()) },
		});
		if (code === 201) {
			navigate('/mypage');
		}
	};
	return (
		<Layout>
			<Container>
				<Wrapper background={CARD_TYPE_MAPS[type]}>
					<MyToolKit canvas={canvas} />
					<MyFabric ref={canvas} />
					<SaveButton onClick={createCard}>저장하기</SaveButton>
				</Wrapper>
			</Container>
		</Layout>
	);
};

export default CreateDiyPage;
