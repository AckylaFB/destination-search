import { Destination } from '@/@types';
import { Card, CardContent } from '@/components';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

interface Props {
	destinations: Destination[];
	onDestinationClick: (destination: Destination) => void;
}

export function CarouselComponent({ destinations, onDestinationClick }: Props) {
	return (
		<Carousel className="w-10/12 self-center">
			<CarouselContent>
				{destinations.map((destination) => (
					<CarouselItem
						key={destination.id}
						className="md:basis-1/2 lg:basis-1/3"
					>
						<div className="p-1">
							<Card
								className="relative cursor-pointer overflow-hidden"
								onClick={() => onDestinationClick(destination)}
							>
								<img
									src={destination.imageUrl}
									alt={destination.name}
									className="absolute inset-0 size-full object-cover"
								/>
								<CardContent className="relative flex aspect-square items-center justify-center bg-black p-6 opacity-50">
									<span className="text-xl font-bold text-white">
										{destination.name}
									</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
