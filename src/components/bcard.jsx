import { QRCodeSVG } from 'qrcode.react';
import styled from 'styled-components';

const Container = styled.div`
	width: 400px;
	height: 230px;
	background: ${({ background }) => (background ? `url(${background})` : 'whitesmoke')};
	color: black;
	font-family: 'MICEGothic';
	.grid-container {
		display: grid;
		width: 346px;
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
		top: 36px;
	}
	.job {
		font-size: 20px;
		line-height: 24px;
		position: absolute;
		left: 27px;
		top: 64px;
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
	svg {
		width: 40px;
		height: 40px;
	}
`;

const CardStyle = styled.div`
	cursor: pointer;
	@import url(https://fonts.googleapis.com/css?family=Raleway:300,700);
	@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
	figure.snip {
		font-family: 'MICEGothic';
		position: relative;
		overflow: hidden;
		margin: 10px;
		min-width: 400px;
		max-width: 400px;
		width: 100%;
		color: #ffffff;
		text-align: left;
		/* background-color: #000000; */
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
	figure.snip p.name {
		line-height: 1.1em;
		font-weight: 700;
		font-size: 1.6em;
		text-transform: uppercase;
		opacity: 0;
	}
	figure.snip p.job {
		line-height: 1.4em;
		font-weight: 700;
		font-size: 1em;
		text-transform: uppercase;
		opacity: 0;
	}
	figure.snip p.tagsString {
		margin-top: 60px;
		font-size: 0.8em;
		color: skyblue;
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

const Bcard = ({
	onClick,
	background,
	address,
	email,
	name,
	id,
	job,
	member_id: memberId,
	phone,
	tags,
	url,
}) => {
	console.log(id, memberId, url);
	return (
		<CardStyle onClick={onClick}>
			<figure className='snip'>
				<Container background={background}>
					<div className='all'>
						<div className='name'>{name}</div>
						<div className='job'>{job}</div>
						<div className='qr'>
							<QRCodeSVG
								className='svgqr'
								value='/search'
							/>
						</div>
						<div className='grid-container'>
							<div
								className='number'
								id='grid'
							>
								{phone}
							</div>
							<div
								className='address'
								id='grid'
							>
								&nbsp;&nbsp;{address}
							</div>
							<div
								className='tag'
								id='grid'
							>
								{tags?.map((v) => `#${v}`).join(' ')}
							</div>
							<div
								className='mail'
								id='grid'
							>
								&nbsp;&nbsp;{email}
							</div>
						</div>
					</div>
				</Container>
				{/* {url !== null && <Fabric url={url} />} */}
				<figcaption>
					<p
						className='name'
						id='up'
					>
						{name}
					</p>
					<p
						className='job'
						id='up'
					>
						{job}
					</p>
					<p className='tagsString'>{tags?.map((v) => `#${v}`).join(' ')}</p>
				</figcaption>
			</figure>
		</CardStyle>
	);
};

export default Bcard;
