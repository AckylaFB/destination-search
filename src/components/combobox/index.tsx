import { CheckIcon, ChevronsUpDown, LoaderCircleIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import { cn } from '@/utils';
import { Button, ButtonProps } from '../ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '../ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

type ExtendedProps = PopoverPrimitive.PopoverProps;

export interface ComboboxProps<T extends object | string>
	extends ExtendedProps {
	items: T[];
	inputValue: string;
	onChangeInputValue: (value: string) => void;
	placeholder?: string;
	selectedItem?: T | null;
	onChangeItem?: (item: T) => void;
	renderItem?: (item: T) => React.ReactNode;
	emptyLabel: string;
	disabled?: ButtonProps['disabled'];
	isItemEqualToSelected?: (item: T, selectedItem?: T | null) => boolean;
	popoverContentProps?: PopoverPrimitive.PopoverContentProps;
	buttonProps?: Omit<ButtonProps, 'role' | 'aria-expanded' | 'disabled'>;
	className?: string;
	loading?: boolean;
}

export const Combobox = <T extends object | string>(
	props: ComboboxProps<T>,
) => {
	const {
		className,
		items,
		placeholder,
		inputValue,
		onChangeInputValue,
		renderItem,
		emptyLabel,
		onChangeItem,
		onOpenChange,
		disabled,
		isItemEqualToSelected,
		popoverContentProps,
		buttonProps,
		loading,
		modal = true,
	} = props;
	const [open, setOpen] = useState(props.open);
	const [selectedItem, setSelectedItem] = useState<T | undefined | null>(null);

	useEffect(() => {
		const newSelectedItem = props.selectedItem
			? items.find(
					(item) =>
						isItemEqualToSelected?.(item, props.selectedItem) ??
						item === props.selectedItem,
				)
			: null;
		setSelectedItem(newSelectedItem);
	}, [props.selectedItem, isItemEqualToSelected, items]);

	const buttonLabel = selectedItem ? selectedItem.toString() : placeholder;

	return (
		<div className={className}>
			<Popover
				open={open}
				onOpenChange={(op) => {
					setOpen(op);
					onOpenChange?.(op);
				}}
				modal={modal}
			>
				<PopoverTrigger asChild>
					<Button
						{...buttonProps}
						variant={buttonProps?.variant ?? 'outline'}
						role="combobox"
						aria-expanded={open}
						disabled={disabled}
						className={cn('w-full', 'justify-between', buttonProps?.className)}
					>
						<span className={cn('max-w-[calc(100%-1rem)]')}>{buttonLabel}</span>
						{loading ? (
							<LoaderCircleIcon className="size-4 animate-spin" />
						) : (
							<ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent
					{...popoverContentProps}
					className={cn('p-0', popoverContentProps?.className)}
				>
					<Command>
						<CommandInput
							placeholder={placeholder}
							value={inputValue}
							onValueChange={onChangeInputValue}
						/>
						<CommandList>
							<CommandEmpty>{emptyLabel}</CommandEmpty>
							<CommandGroup>
								{items.map((item, index) => (
									<CommandItem
										key={index}
										onSelect={() => {
											(onChangeItem ?? setSelectedItem)?.(item);
											setOpen(false);
										}}
									>
										{renderItem?.(item) ?? item.toString()}
										<CheckIcon
											className={cn(
												'ml-auto',
												'h-4',
												'w-4',
												isItemEqualToSelected?.(item, props.selectedItem) ||
													selectedItem === item
													? 'opacity-100'
													: 'opacity-0',
											)}
										/>
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	);
};
