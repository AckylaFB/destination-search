import { Destination } from '@/@types';
import {
	Card,
	CardContent,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components';

interface Props {
	destinations: Destination[];
}

export function CarouselComponent({ destinations }: Props) {
	return (
		<Carousel className="w-10/12 self-center">
			<CarouselContent>
				{destinations.map((destination) => (
					<CarouselItem
						key={destination.id}
						className="md:basis-1/2 lg:basis-1/3"
					>
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-square items-center justify-center p-6">
									{destination.name}
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
