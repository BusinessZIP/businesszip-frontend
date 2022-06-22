import { forwardRef } from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
	width: 100%;
	border: ${({ isError }) => (isError ? '1px solid red' : 'none')};
	border-bottom: ${({ isError }) => (isError ? '1px solid red' : '1px solid black')};
`;

const ErrorMessage = styled.p`
	color: red;
`;

const Input = forwardRef(({ errorMessage, ...rest }, ref) => {
	return (
		<>
			<InputStyle
				ref={ref}
				isError={errorMessage}
				{...rest}
			/>
			<ErrorMessage>{errorMessage}</ErrorMessage>
		</>
	);
});
Input.displayName = 'Input';

export default Input;
