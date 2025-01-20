import { getRequestConfig } from 'next-intl/server';
import { IntlErrorCode } from 'next-intl';

export default getRequestConfig(async () => {
	// Provide a static locale, fetch a user setting,
	// read from `cookies()`, `headers()`, etc.
	const locale = 'fr-FR';


	return { 
       onError(error) {
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        // Missing translations are expected and should only log an error
        console.error(error);
      } else {
        // Other errors indicate a bug in the app and should be reported
        console.error(error);
      }
    },
 
    getMessageFallback({key}) {
        return key
    },
		locale,
		messages: (await import(`../messages/${locale}.json`)).default,
	};
});
