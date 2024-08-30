import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1.5rem;
	width: 100%;

	position: absolute;
	top: 0;
`;

export const Logo = styled.div`
	width: 4rem;
	cursor: pointer;
`;

export const Main = styled.main`
	flex: 1;
	display: flex;
	flex-direction: column;
`;
