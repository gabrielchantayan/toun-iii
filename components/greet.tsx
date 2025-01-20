'use client'
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
const Greet = () => {

    // Get current date, format it in locale date with long day of week and month
      const t = useTranslations('greetings');

      const locale = useLocale();



    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const today = date.toLocaleDateString(locale, options);

    // Get current time in hours
    const hours = Math.floor(new Date().getHours() / 3);

    const greeting = () => {
        switch (hours) {
			case 7:
			case 8:
			case 0:
			case 1:
				return 'good-night';
			case 2:
			case 3:
				return 'good-morning';
			case 4:
			case 5:
				return 'good-afternoon';
			case 6:
				return 'good-evening';
			default:
				return 'hello';
		}
    }

    
    return (
        <div className="flex flex-col gap-2 ">
            <p className="text-sm capitalize">{today}</p>
            <h1 className="text-4xl font-bold capitalize">{t(greeting())}</h1>
        </div>
    )
}

export default Greet