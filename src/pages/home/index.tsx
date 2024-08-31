import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@/store';
import { CarouselComponent } from '@/components';
import { useDebounce } from '@/hooks';
import { Destination } from '@/@types';

import { Banner } from './Banner';
import { useConnector } from './connector';

export function Home() {
	const dispatch = useAppDispatch();
	const { selectors, actions } = useConnector();
	const navigate = useNavigate();

	const { suggestedDestinations, searchQuery } = selectors;
	const {
		fetchTrendingDestinations,
		fetchDestinations,
		setSelectedDestination,
	} = actions;

	const debouncedSearchQuery = useDebounce<string>(searchQuery, 500);

	const handleDestinationClick = (destination: Destination) => {
		dispatch(fetchDestinations(destination.name));
		dispatch(setSelectedDestination(destination));
		navigate('/destination');
	};

	useEffect(() => {
		if (debouncedSearchQuery && debouncedSearchQuery.length >= 3) {
			dispatch(fetchDestinations(debouncedSearchQuery));
		}
	}, [debouncedSearchQuery]);

	useEffect(() => {
		dispatch(fetchTrendingDestinations());
	}, []);

	return (
		<>
			<Banner />

			<section className="flex flex-col p-8">
				<h3 className="mb-8 text-xl font-semibold text-sky-600 shadow-slate-200">
					Trending Destinations
				</h3>
				<CarouselComponent
					destinations={suggestedDestinations}
					onDestinationClick={handleDestinationClick}
				/>
			</section>
		</>
	);
}
