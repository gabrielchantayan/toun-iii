import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useTranslations } from 'next-intl';
import ThemeFactory from './settings-modal/theme-factory';
import PrefixTable from './settings-modal/prefix-table';

const SettingsModal = () => {

    const t = useTranslations('settings');

    return (
		<Dialog>
			<DialogTrigger className='sm:hover:rotate-45 transition-all duration-400 ease-in-out flex flex-row items-center justify-center gap-2'>
				<Icon icon='mdi:cog' width={32} height={32} />
				<p className='block sm:hidden'>{t('settings')}</p>
			</DialogTrigger>
			<DialogContent className='sm:w-1/2 w-5/6'>
				<DialogHeader>
					<DialogTitle>{t('settings')}</DialogTitle>
					<div className='flex flex-col gap-4'>
						<div>
							<p>{t('theme')}</p>
                            <ThemeFactory />
						</div>
						<div className='flex flex-col sm:flex-row gap-2'>
							<div className='flex flex-col sm:w-1/2 pr-2'>
								<p>{t('search-prefixes')}</p>
								<PrefixTable />
							</div>
							<div className='flex flex-col sm:w-1/2 pl-2'>
								<p>{t('language')}</p>
							</div>
						</div>
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}

export default SettingsModal