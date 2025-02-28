import { Icon } from '@iconify/react';
import { clean_url } from '@/lib/utils';

/**
 * A clickable card with an icon and a label, used to display bookmarks.
 * @param {{ icon: string, item: string, url: string }} props
 * @prop {string} icon - The icon to be displayed.
 * @prop {string} item - The label to be displayed.
 * @prop {string} url - The URL the card should link to.
 * @returns A React component.
 */
const ItemCard = ({ icon, item, url } : { icon: string, item: string, url: string }) => {
	return (
		<a
			href={url}
			className='overflow-hidden block flex flex-row items-center justify-start p-2 gap-3 uppercase w-full sm:w-52 hover:scale-[1.05] active:scale-[0.98] transition-all duration-150 ease-in-out'>
			<div className='w-8 h-8'>
				<Icon icon={icon} width={32} height={32} />
			</div>
			<div className='flex flex-col gap-0 items-start justify-center h-full'>
				<p className='font-[600] text-base leading-4'>{item}</p>
				<p className='text-xs text-[var(--color-accent)] truncate'>{clean_url(url)}</p>
			</div>
		</a>
	);
};

export default ItemCard;
