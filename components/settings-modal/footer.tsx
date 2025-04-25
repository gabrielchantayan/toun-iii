import { Icon } from '@iconify/react/dist/iconify.js';
import { useTranslations } from 'next-intl';
import {underline} from '@/components/reuse-styles';

const SettingsModalFooter = () => {
	const t = useTranslations();

    const l = t.markup('credits.made-by', {
		l: (chunks) => `<a href="https://gabrielchantayan.com" class="${underline}" target="_blank">${chunks}</a>`,
	});

	return (
		<div className='flex flex-col gap-0 sm:justify-center items-center border-t border-[var(--color-accent)]'>
			<div className='flex flex-col sm:flex-row  mt-4 gap-4'>
				<a
					className={`flex flex-row items-center gap-1 ${underline}`}
					href='https://github.com/gabrielchantayan/toun-iii'>
					<Icon icon='mdi:github' width={24} height={24} /> <p>Github</p>
				</a>
				<p>•</p>
				<p className='' dangerouslySetInnerHTML={{ __html: l }} />
				<p>•</p>
				<a href='/admin' className={underline}>{t('admin.admin-settings')}</a>
			</div>
		</div>
	);
};

export default SettingsModalFooter;
