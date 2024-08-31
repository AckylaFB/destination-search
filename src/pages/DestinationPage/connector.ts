import { useAppSelector } from '@/store';
import {
	selectors as destinationsSelectors,
	actions as destinationsActions,
	thunkActions,
} from '@/store/modules/destinations';

export function useConnector() {
	const selectors = {
		suggestedDestinations: useAppSelector(
			destinationsSelectors.suggestedDestinations,
		),
		selectedDestination: useAppSelector(
			destinationsSelectors.selectedDestination,
		),
	};

	const actions = {
		setSelectedDestination: destinationsActions.setSelectedDestination,
		fetchNearbyDestinations: thunkActions.fetchNearbyDestinations,
		fetchDestinations: thunkActions.fetchDestinations,
	};

	return { selectors, actions };
}
