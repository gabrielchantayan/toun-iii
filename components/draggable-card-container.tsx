import update from 'immutability-helper';
import type { FC } from 'react';
import { memo, useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';

import {DraggableCard} from '@/components/ui/draggable-card';

const ItemTypes = {
    CARD: 'card',
}

export interface ContainerState {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	cards: any[];
}

const ITEMS = [
	{
		id: 1,
		text: 'Write a cool JS library',
	},
	{
		id: 2,
		text: 'Make it generic enough',
	},
	{
		id: 3,
		text: 'Write README',
	},
	{
		id: 4,
		text: 'Create some examples',
	},
	{
		id: 5,
		text: 'Spam in Twitter and IRC to promote it',
	},
	{
		id: 6,
		text: '???',
	},
	{
		id: 7,
		text: 'PROFIT',
	},
];


const DraggableCardContainer: FC = memo(function Container() {
	const [cards, setCards] = useState(ITEMS);

	const findCard = useCallback(
		(id: string) => {
			const card = cards.filter((c) => `${c.id}` === id)[0] as {
				id: number;
				text: string;
			};
			return {
				card,
				index: cards.indexOf(card),
			};
		},
		[cards]
	);

	const moveCard = useCallback(
		(id: string, atIndex: number) => {
			const { card, index } = findCard(id);
			setCards(
				update(cards, {
					$splice: [
						[index, 1],
						[atIndex, 0, card],
					],
				})
			);
		},
		[findCard, cards, setCards]
	);

	const [, drop] = useDrop(() => ({ accept: ItemTypes.CARD }));
	return (
		<div {...drop} className='flex flex-col gap-2 w-96'>
			{cards.map((card) => (
				<DraggableCard
					key={card.id}
					id={`${card.id}`}
					text={card.text}
					moveCard={moveCard}
					findCard={findCard}
				/>
			))}
		</div>
	);
});


export default DraggableCardContainer;