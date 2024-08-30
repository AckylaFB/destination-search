import { Avatar, AvatarFallback, AvatarImage } from '@/components';
import * as S from './styles';
import { Link } from 'react-router-dom';

export function Header() {
	return (
		<S.Header>
			<Link to="/">
				<S.Logo>
					<img
						src="https://static.mozio.com/assets/logo.png"
						alt="Mozio Global Mobility"
					/>
				</S.Logo>
			</Link>
			<Avatar>
				<AvatarFallback>M</AvatarFallback>
				<AvatarImage src="https://github.com/ackylafb.png" alt="" />
			</Avatar>
		</S.Header>
	);
}
