import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	height: calc(100vh - 3rem);
	width: 30vmin;
	svg {
		fill: ${({ color }) => `url(#${color})`};
	}
	h2 {
		padding: 2rem;
		font-weight: 400;
		font-size: 4vmin;
		position: absolute;
		top: 0px;
		color: #ffffff;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
`;

const LeftTitleLogo = ({ title, color = 'green' }) => {
	return (
		<Container color={color}>
			<h2>{title}</h2>
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 150 200'
				preserveAspectRatio='none'
			>
				<defs>
					<linearGradient
						id='green'
						gradientTransform='rotate(90)'
					>
						<stop
							offset='0%'
							stopColor='rgba(23, 122, 75, 0.83)'
						/>
						<stop
							offset='100%'
							stopColor='#A9DE97'
						/>
					</linearGradient>
					<linearGradient
						id='orange'
						gradientTransform='rotate(90)'
					>
						<stop
							offset='0%'
							stopColor='#E67979'
						/>
						<stop
							offset='55.73%'
							stopColor='rgba(222, 161, 68, 0.5625)'
						/>
						<stop
							offset='100%'
							stopColor='rgba(240, 210, 164, 0.76)'
						/>
					</linearGradient>
				</defs>
				<polygon points='0,0 150,0 0,200' />
			</svg>
		</Container>
	);
};

export default LeftTitleLogo;
