import { useAppSelector } from '@/store';
import {
	selectors as destinationsSelectors,
	actions as destinationsActions,
	thunkActions,
} from '@/store/modules/destinations';

export function useConnector() {
	const selectors = {
		destinations: useAppSelector(destinationsSelectors.getDestinations),
		trendingDestinations: useAppSelector(
			destinationsSelectors.trendingDestinations,
		),
		searchQuery: useAppSelector(destinationsSelectors.searchQuery),
		isFetching: useAppSelector(destinationsSelectors.isFetching),
		hasFetchError: useAppSelector(destinationsSelectors.hasFetchError),
	};

	const actions = {
		setSearchQuery: destinationsActions.setSearchQuery,
		fetchDestinations: thunkActions.fetchDestinations,
		fetchTrendingDestinations: thunkActions.fetchTrendingDestinations,
	};

	return {
		selectors,
		actions,
	};
}
