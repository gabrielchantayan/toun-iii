/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import { useTranslations } from 'next-intl';


 const BookmarkFactory = () => {

    const t = useTranslations('app');
    const c = useTranslations('categories');


    
    const data = JSON.parse(fs.readFileSync('data/bookmarks.json', 'utf8'));

    return (
		<div>
			<p className='text-2xl font-bold uppercase mb-2'>{t('bookmarks')}</p>
			<div className='flex flex-row flex-wrap gap-4'>
				{data.map((category: any) => {
					return (
						<div key={category.name} className='w-52'>
							<h2 className='text-lg font-bold uppercase'>{c(category.name.toLowerCase())}</h2>
							<div className='flex flex-col flex-wrap gap-0'>
								{category.items.map((app: any) => {
									return (
										<a key={app.name} href={app.url} className='text-sm hover:underline'>
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

}

export default BookmarkFactory