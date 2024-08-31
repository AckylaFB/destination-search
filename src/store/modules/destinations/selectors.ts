import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { adapter } from './slice';

export const getDestinations = adapter.getSelectors<RootState>(
	(state) => state.destinations.cities,
).selectAll;

const selectSelf = (state: RootState) => state.destinations;

export const trendingDestinations = createDraftSafeSelector(
	selectSelf,
	(state) => state.trending,
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
