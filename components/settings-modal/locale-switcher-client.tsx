'use client';
import { useLocale, useTranslations } from 'next-intl';
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select';

export default function LocaleSwitcherClient({ routing }: any) {
	const locale = useLocale();

	const l = (new_locale: string) => {
		document.cookie = `NEXT_LOCALE=${new_locale}; path=/`;
		window.location.reload();
	};

	return (
		<Select onValueChange={l}>
      <SelectTrigger>{routing.find((cur: [string, string]) => cur[0] === locale)[1]}</SelectTrigger>
			<SelectContent>
				{routing.map((cur: [string, string]) => (
					<SelectItem key={cur[0]} value={cur[0]}>
						{cur[1]}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
