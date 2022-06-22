import { forwardRef } from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
	width: 100%;
	background: none;
	border: ${({ isError }) => (isError ? '2px solid red' : 'none')};
	border-bottom: ${({ isError, color }) => (isError ? '2px solid red' : `2px solid ${color}`)};
`;

const ErrorMessage = styled.p`
	color: red;
`;

const Input = forwardRef(({ errorMessage, color, ...rest }, ref) => {
	return (
		<>
			<InputStyle
				ref={ref}
				color={color}
				isError={errorMessage}
				{...rest}
			/>
			<ErrorMessage>{errorMessage}</ErrorMessage>
		</>
	);
});
Input.displayName = 'Input';

export default Input;
