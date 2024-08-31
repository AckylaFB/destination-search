import { EntityState } from '@reduxjs/toolkit';

export interface Destination {
	id: number;
	name: string;
	description: string;
	country: string;
	climate: string;
	currency: string;
	latitude: number;
	longitude: number;
}

export interface DestinationState {
	cities: EntityState<Destination, number>;
	isFetching: boolean;
	hasFetchError: boolean;
}
