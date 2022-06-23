import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.2);

	display: flex;
	align-items: center;
	justify-content: center;

	z-index: 9999;
`;

const Modal = ({ children, onClick }) => {
	return createPortal(
		<Container onClick={onClick}>
			<div
				role='button'
				tabIndex={0}
				onClick={(e) => {
					e.stopPropagation();
				}}
				onKeyDown={() => {}}
			>
				{children}
			</div>
		</Container>,
		document.getElementById('portal'),
	);
};

export default Modal;
