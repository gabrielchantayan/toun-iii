import prefixes from '@/data/prefixes.json';
import { useTranslations } from 'next-intl';

export default function PrefixTable() {
    const t = useTranslations('settings');

    const prefixes_built = [];

    for (const [key, prefix] of Object.entries(prefixes)) {
        prefixes_built.push(
			<tr style={{ border: '1px solid var(--color-accent)' }}>
				<td className='px-2' style={{ border: '1px solid var(--color-accent)' }}>{key}</td>
				<td className='px-2'>{prefix.name}</td>
			</tr>
		);
    }

    return (
		<table className='px-4' style={{border: '1px solid var(--color-accent)'}}>
			<thead style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-background)' }}>
				<tr >
					<th className='px-2'>{t('prefix')}</th>
					<th className='px-2'>{t('service')}</th>
				</tr>
			</thead>
			<tbody>{prefixes_built}</tbody>
		</table>
	);
}