import { fetchDestinations, fetchTrendingDestinations } from '@/fake-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const actions = {
	fetchDestinations: createAsyncThunk(
		'destinations/fetchDestinations',
		async (query: string, thunkApi) => {
			try {
				return fetchDestinations(query);
			} catch (err) {
				return thunkApi.rejectWithValue(err);
			}
		},
	),

	fetchTrendingDestinations: createAsyncThunk(
		'destinations/fetchTrendingDestinations',
		async (_, thunkApi) => {
			try {
				return fetchTrendingDestinations();
			} catch (err) {
				return thunkApi.rejectWithValue(err);
			}
		},
	),
};
