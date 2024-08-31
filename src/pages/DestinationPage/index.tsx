import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CarouselComponent } from '@/components';
import { useAppDispatch } from '@/store';
import { Destination } from '@/@types';

import { useConnector } from './connector';

export function DestinationPage() {
	const { selectors, actions } = useConnector();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { suggestedDestinations, selectedDestination } = selectors;
	const { fetchDestinations, setSelectedDestination, fetchNearbyDestinations } =
		actions;

	const handleDestinationClick = (destination: Destination) => {
		dispatch(fetchDestinations(destination.name));
		dispatch(setSelectedDestination(destination));
		dispatch(fetchNearbyDestinations(destination));
		navigate('/destination');
	};

	useEffect(() => {
		if (!selectedDestination) {
			navigate('/');
		}
	}, [selectedDestination]);

	return (
		<>
			<header className="relative flex h-[30vh] w-full flex-col items-center justify-between py-20">
				<img
					className="absolute left-0 top-0 -z-10 size-full opacity-80"
					src={selectedDestination?.imageUrl}
					alt={selectedDestination?.name}
				/>
			</header>

			<section className="flex flex-col p-8">
				<h1 className="mb-4 text-3xl font-bold text-sky-800">
					{selectedDestination?.name}
				</h1>
				<p className="mb-6 text-lg text-gray-700">
					{selectedDestination?.description}
				</p>
				<div className="grid grid-cols-2 gap-4">
					<div className="flex flex-col">
						<span className="text-sm font-semibold text-gray-600">Country</span>
						<span className="text-lg text-gray-800">
							{selectedDestination?.country}
						</span>
					</div>
					<div className="flex flex-col">
						<span className="text-sm font-semibold text-gray-600">Climate</span>
						<span className="text-lg text-gray-800">
							{selectedDestination?.climate}
						</span>
					</div>
				</div>
			</section>

			<section className="flex flex-col p-8">
				<h3 className="mb-8 text-xl font-semibold text-sky-600 shadow-slate-200">
					Nearby Destinations
				</h3>
				<CarouselComponent
					destinations={suggestedDestinations}
					onDestinationClick={handleDestinationClick}
				/>
			</section>
		</>
	);
}
