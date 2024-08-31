import styled from 'styled-components';
import colors from 'tailwindcss/colors';

export const BannerContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 0;

	height: 70vh;
	width: 100%;
	position: relative;
`;

export const BannerImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	opacity: 0.8;
`;

export const Headline = styled.h1`
	width: 50%;
	text-align: center;
	font-size: 4.5rem;
	font-weight: 500;
	text-shadow: 1px 1px ${colors.slate[800]};
	color: ${colors.red[50]};

	> span {
		color: ${colors.sky[600]};
		font-style: italic;
		font-weight: 300;
		text-shadow: 1px 1px ${colors.slate[200]};
	}
`;

export const ComboBox = styled.input`
	padding: 0.5rem;
	border-radius: 8px;
	width: 40%;
`;
