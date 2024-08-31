import { useAppSelector } from '@/store';
import {
	selectors as destinationsSelectors,
	actions as destinationsActions,
	thunkActions,
} from '@/store/modules/destinations';

export function useConnector() {
	const selectors = {
		destinations: useAppSelector(destinationsSelectors.getDestinations),
		suggestedDestinations: useAppSelector(
			destinationsSelectors.suggestedDestinations,
		),
		searchQuery: useAppSelector(destinationsSelectors.searchQuery),
		isFetching: useAppSelector(destinationsSelectors.isFetching),
		hasFetchError: useAppSelector(destinationsSelectors.hasFetchError),
	};

	const actions = {
		setSearchQuery: destinationsActions.setSearchQuery,
		setSelectedDestination: destinationsActions.setSelectedDestination,
		fetchDestinations: thunkActions.fetchDestinations,
		fetchTrendingDestinations: thunkActions.fetchTrendingDestinations,
		fetchNearbyDestinations: thunkActions.fetchNearbyDestinations,
	};

	return {
		selectors,
		actions,
	};
}
