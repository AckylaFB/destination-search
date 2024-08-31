import bannerImage from '@/assets/banner.jpg';
import { useAppDispatch } from '@/store';

import { DestinationSearch } from './DestinationSearch';
import { useConnector } from './connector';
import * as S from './styles';

export function Banner() {
	const dispatch = useAppDispatch();
	const { selectors, actions } = useConnector();

	const { isFetching, destinations, searchQuery } = selectors;
	const { setSearchQuery } = actions;

	return (
		<S.BannerContainer>
			<S.BannerImage src={bannerImage} />
			<S.Headline>
				Explore the <span>world</span> with us!
			</S.Headline>

			<DestinationSearch
				className="w-1/3"
				destinations={destinations}
				placeholder="Start typing to search"
				inputValue={searchQuery}
				onChangeInputValue={(value) => dispatch(setSearchQuery(value))}
				loading={isFetching}
			/>
		</S.BannerContainer>
	);
}
