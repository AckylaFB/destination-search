import bannerImage from '@/assets/banner.jpg';
import { Combobox } from '@/components';
import * as S from './styles';

export function Banner() {
	return (
		<S.BannerContainer>
			<S.BannerImage src={bannerImage} />
			<S.Headline>
				Explore the <span>world</span> with us!
			</S.Headline>

			<Combobox
				className="w-1/3"
				emptyLabel="No cities found"
				items={[]}
				placeholder="Start typing to search"
			/>
		</S.BannerContainer>
	);
}
