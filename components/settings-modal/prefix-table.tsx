import prefixes from '@/data/prefixes.json';
import { useTranslations } from 'next-intl';

/**
 * A table component that displays a list of prefixes and their associated services.
 */
export default function PrefixTable() {
	const t = useTranslations('settings');

	/**
	 * Builds a list of JSX elements representing the prefixes and services.
	 */
	const prefixes_built = [];

	/**
	 * Iterate over the prefixes object and extract the key-value pairs.
	 * For each key-value pair, create a new JSX element representing a table row.
	 * The table row contains two table cells, one for the prefix and one for the service.
	 */
	for (const [key, prefix] of Object.entries(prefixes)) {
		prefixes_built.push(
			<tr key={key} style={{ border: '1px solid var(--color-primary)' }}>
				<td className='px-2'>
					{key}
				</td>
				<td className='px-2'>{prefix.name}</td>
			</tr>
		);
	}

	return (
		<table className='px-4 rounded-md' style={{ border: '1px solid var(--color-primary)' }}>
			<thead style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-background)' }}>
				<tr>
					<th className='px-2'>{t('prefix')}</th>
					<th className='px-2'>{t('service')}</th>
				</tr>
			</thead>
			<tbody>{prefixes_built}</tbody>
		</table>
	);
}
