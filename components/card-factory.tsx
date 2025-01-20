/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslations } from 'next-intl';
import ItemCard from './item-card';
import fs from 'fs';

/**
 * Generates a grid of category headers and item cards, based on the 'data/apps.json' file.
 *
 * The component is a flex container with a horizontal layout, wrapping its children.
 * Each category is a direct child of the container, and is represented by an h2 header and a horizontal flex container.
 * Each item card is a direct child of the category's container, and is represented by an ItemCard component.
 *
 * The component uses the 'next-intl' hook to translate the category names.
 */
const CardFactory = () => {
	const data = JSON.parse(fs.readFileSync('data/apps.json', 'utf8'));

	const c = useTranslations('categories');

	return (
		<div className='flex flex-row flex-wrap gap-8'>
			{data.map((category: any) => {
				return (
					<div key={category.name}>
						<h2 className='text-2xl font-bold uppercase'>{c(category.name.toLowerCase())}</h2>
						<div className='flex flex-row flex-wrap gap-0'>
							{category.apps.map((app: any) => {
								return <ItemCard key={app.name} icon={app.icon} item={app.name} url={app.url} />;
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CardFactory;
