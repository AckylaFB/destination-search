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
	imageUrl: string;
}

export interface DestinationState {
	cities: EntityState<Destination, number>;
	suggestedDestinations: Destination[];
	searchQuery: string;
	selectedDestination: Destination | null;
	isFetching: boolean;
	hasFetchError: boolean;
}
