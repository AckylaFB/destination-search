import { useState } from 'react';
import { Check, ChevronsUpDown, LoaderCircleIcon } from 'lucide-react';
import { cn } from '@/utils';
import { Button } from '@/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { Destination } from '@/@types';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	destinations: Destination[];
	inputValue: string;
	onChangeInputValue: (value: string) => void;
	loading?: boolean;
	placeholder: string;
	onSelectDestination?: (destination: Destination) => void;
	hasError?: boolean;
}

export function DestinationSearch({
	destinations,
	inputValue,
	onChangeInputValue,
	loading,
	placeholder,
	onSelectDestination,
	hasError,
	...args
}: Props) {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState<Destination | null>(null);

	return (
		<div {...args}>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className="w-full justify-between"
					>
						<span className={cn('max-w-[calc(100%-1rem)]')}>
							{value ? value.name : placeholder}
						</span>
						{loading ? (
							<LoaderCircleIcon className="size-4 animate-spin" />
						) : (
							<ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="p-0">
					<Command>
						<CommandInput
							placeholder={placeholder}
							value={inputValue}
							onValueChange={onChangeInputValue}
						/>
						<CommandList>
							{hasError ? (
								<CommandEmpty className="p-2 text-center text-sm text-red-500">
									An error occurred while fetching destinations. Please try
									again.
								</CommandEmpty>
							) : (
								<CommandEmpty>No destination found.</CommandEmpty>
							)}
							<CommandGroup>
								{destinations.map((destination) => (
									<CommandItem
										className="cursor-pointer"
										key={destination.id}
										onSelect={() => {
											setValue(destination);
											setOpen(false);
											onSelectDestination?.(destination);
										}}
									>
										<Check
											className={cn(
												'mr-2 h-4 w-4',
												value === destination ? 'opacity-100' : 'opacity-0',
											)}
										/>
										{destination?.name}
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	);
}
