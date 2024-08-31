import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { adapter } from './slice';

export const getDestinations = adapter.getSelectors<RootState>(
	(state) => state.destinations.cities,
).selectAll;

const selectSelf = (state: RootState) => state.destinations;

export const suggestedDestinations = createDraftSafeSelector(
	selectSelf,
	(state) => state.suggestedDestinations,
);

export const selectedDestination = createDraftSafeSelector(
	selectSelf,
	(state) => state.selectedDestination,
);

export const isFetching = createDraftSafeSelector(
	selectSelf,
	(state) => state.isFetching,
);

export const hasFetchError = createDraftSafeSelector(
	selectSelf,
	(state) => state.hasFetchError,
);

export const searchQuery = createDraftSafeSelector(
	selectSelf,
	(state) => state.searchQuery,
);
