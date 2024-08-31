import { useEffect } from 'react';

import { useAppDispatch } from '@/store';

import { CarouselComponent } from '@/components';
import { Banner } from './Banner';
import { useConnector } from './connector';
import { useDebounce } from '@/hooks';

export function Home() {
	const dispatch = useAppDispatch();
	const { selectors, actions } = useConnector();

	const { suggestedDestinations, searchQuery } = selectors;
	const { fetchTrendingDestinations, fetchDestinations } = actions;

	const debouncedSearchQuery = useDebounce<string>(searchQuery, 500);

	useEffect(() => {
		if (debouncedSearchQuery) {
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
				<CarouselComponent destinations={suggestedDestinations} />
			</section>
		</>
	);
}
