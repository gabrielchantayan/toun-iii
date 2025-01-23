import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useTranslations } from 'next-intl';
import ThemeFactory from './settings-modal/theme-factory';
import PrefixTable from './settings-modal/prefix-table';
import LocaleSwitcher from './settings-modal/locale-switcher';
import SettingsModalFooter from './settings-modal/footer';

/**
 * SettingsModal is a component that provides a user interface for application settings.
 * It includes a dialog with options to change the theme, manage search prefixes, and select the language.
 * The dialog is triggered by a cog icon, which rotates on hover.
 * It uses internationalization to display translated text for different languages.
 */

const SettingsModal = () => {

    const t = useTranslations('settings');

    return (
		<Dialog>
			<DialogTrigger className='sm:hover:rotate-45 transition-all duration-400 ease-in-out flex flex-row items-center justify-center gap-2'>
				<Icon icon='mdi:cog' width={32} height={32} />
				<p className='block sm:hidden'>{t('settings')}</p>
			</DialogTrigger>
			<DialogContent className='sm:w-1/2 w-5/6 flex flex-col gap-4'>
				<DialogHeader>
					<DialogTitle>{t('settings')}</DialogTitle>
				</DialogHeader>

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
							<LocaleSwitcher />
						</div>
					</div>
				</div>
				<SettingsModalFooter />
			</DialogContent>
		</Dialog>
	);
}

export default SettingsModal