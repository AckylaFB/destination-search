import { RootState } from '@/store';
import { createDraftSafeSelector } from '@reduxjs/toolkit';

const selectSelf = (state: RootState) => state.destinations;

export const isFetching = createDraftSafeSelector(
	selectSelf,
	(state) => state.isFetching,
);

export const hasFetchError = createDraftSafeSelector(
	selectSelf,
	(state) => state.hasFetchError,
);
