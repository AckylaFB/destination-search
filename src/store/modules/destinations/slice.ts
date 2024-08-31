import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { Destination, DestinationState } from '@/@types';

import { actions as thunkActions } from './actions';

const adapter = createEntityAdapter<Destination>({});

const initialState: DestinationState = {
	cities: adapter.getInitialState(),
	isFetching: false,
	hasFetchError: false,
};

const slice = createSlice({
	name: 'destinations',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
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
