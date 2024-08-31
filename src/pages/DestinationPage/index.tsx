import { CarouselComponent } from '@/components';
import { useAppSelector } from '@/store';
import { selectors as destinationsSelectors } from '@/store/modules/destinations';

export function DestinationPage() {
	const suggestedDestinations = useAppSelector(
		destinationsSelectors.suggestedDestinations,
	);
	const selectedDestination = useAppSelector(
		destinationsSelectors.selectedDestination,
	);

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
				<h3 className="mb-8 text-xl font-semibold text-sky-600 shadow-slate-200">
					Nearby Destinations
				</h3>
				<CarouselComponent destinations={suggestedDestinations} />
			</section>
		</>
	);
}
