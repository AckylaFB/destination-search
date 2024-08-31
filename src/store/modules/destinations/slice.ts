import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';

import { Destination, DestinationState } from '@/@types';

import { actions as thunkActions } from './actions';

export const adapter = createEntityAdapter<Destination>({});

const initialState: DestinationState = {
	cities: adapter.getInitialState(),
	suggestedDestinations: [],
	searchQuery: '',
	selectedDestination: null,
	isFetching: false,
	hasFetchError: false,
};

const slice = createSlice({
	name: 'destinations',
	initialState,
	reducers: {
		setSearchQuery: (state, action: PayloadAction<string>) => {
			state.searchQuery = action.payload;
		},
		setSelectedDestination: (
			state,
			action: PayloadAction<Destination | null>,
		) => {
			state.selectedDestination = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(
			thunkActions.fetchTrendingDestinations.fulfilled,
			(state, action) => {
				state.suggestedDestinations = action.payload;
			},
		);

		builder.addCase(thunkActions.fetchDestinations.pending, (state) => {
			state.isFetching = true;
			state.hasFetchError = false;
		});
		builder.addCase(
			thunkActions.fetchDestinations.fulfilled,
			(state, action) => {
				state.isFetching = false;
				state.hasFetchError = false;

				adapter.addMany(state.cities, action.payload);
				state.searchQuery = '';
			},
		);
		builder.addCase(thunkActions.fetchDestinations.rejected, (state) => {
			state.isFetching = false;
			state.hasFetchError = true;
		});
	},
});

export const { reducer, actions } = slice;
export default slice;
