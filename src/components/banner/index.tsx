import bannerImage from '@/assets/banner.jpg';
import * as S from './styles';

export function Banner() {
	return (
		<S.BannerContainer>
			<S.BannerImage src={bannerImage} />
			<S.Headline>
				Explore the <span>world</span> with us!
			</S.Headline>
			<S.ComboBox />
		</S.BannerContainer>
	);
}
