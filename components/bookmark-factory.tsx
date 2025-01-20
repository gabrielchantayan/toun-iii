/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import { useTranslations } from 'next-intl';

/**
 * A component that renders bookmarks.
 */
const BookmarkFactory = () => {
	/**
	 * The translations for the app.
	 */
	const t = useTranslations('app');

	/**
	 * The translations for the categories.
	 */
	const c = useTranslations('categories');

	/**
	 * The data for the bookmarks.
	 */
	const data = JSON.parse(fs.readFileSync('data/bookmarks.json', 'utf8'));

	return (
		<div>
			<p className='text-2xl font-bold uppercase mb-2'>
				{/* The title of the bookmarks section */}
				{t('bookmarks')}
			</p>
			<div className='flex flex-row flex-wrap gap-4'>
				{/* Loop through the categories and render the bookmarks */}
				{data.map((category: any) => {
					return (
						<div key={category.name} className='w-52'>
							{/* The title of the category */}
							<h2 className='text-lg font-bold uppercase'>{c(category.name.toLowerCase())}</h2>
							<div className='flex flex-col flex-wrap gap-0'>
								{/* Loop through the bookmarks and render them */}
								{category.items.map((app: any) => {
									return (
										<a key={app.name} href={app.url} className='text-sm hover:underline'>
											{/* The name of the bookmark */}
											{app.name}
										</a>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BookmarkFactory;
