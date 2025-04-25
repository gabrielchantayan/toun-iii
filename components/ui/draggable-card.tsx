import { Icon } from '@iconify/react/dist/iconify.js';
import type { FC } from 'react';
import { memo } from 'react';
import { useDrag, useDrop } from 'react-dnd';

// Define the item types for drag-and-drop
const ItemTypes = {
	CARD: 'card',
};

// Interface for CardProps
export interface CardProps {
	id: string;
	text: string;
	moveCard: (id: string, to: number) => void;
	findCard: (id: string) => { index: number };
}

// Interface for the item being dragged
interface Item {
	id: string;
	originalIndex: number;
}

// DraggableCard component
export const DraggableCard: FC<CardProps> = memo(function Card({ id, text, moveCard, findCard }) {
	// Get the original index of the card
	const originalIndex = findCard(id).index;
	
	// Setup drag functionality
	const [{ isDragging }, drag, preview] = useDrag(
		() => ({
			type: ItemTypes.CARD,
			item: { id, originalIndex },
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
			end: (item, monitor) => {
				const { id: droppedId, originalIndex } = item;
				const didDrop = monitor.didDrop();
				// If the card was not dropped, move it back to its original position
				if (!didDrop) {
					moveCard(droppedId, originalIndex);
				}
			},
		}),
		[id, originalIndex, moveCard]
	);

	// Setup drop functionality
	const [, drop] = useDrop(
		() => ({
			accept: ItemTypes.CARD,
			hover({ id: draggedId }: Item) {
				if (draggedId !== id) {
					const { index: overIndex } = findCard(id);
					// Move the card to the new index
					moveCard(draggedId, overIndex);
				}
			},
		}),
		[findCard, moveCard]
	);

	// Set opacity based on dragging state
	const opacity = isDragging ? 0 : 1;
	return (
		<div
			ref={(node) => {
				preview(node);
			}}
			className='bg-[var(--color-background)] border border-[var(--color-primary)] rounded-md p-2 mb-1 flex flex-row items-center gap-2'
			style={{ opacity }}>
			<div
				ref={(node) => {
					drag(drop(node));
				}}
				className='hover:cursor-move'
				style={{ opacity }}>
				<Icon icon='mdi:drag' width={24} height={24} />
			</div>
			{text}
		</div>
	);
});

