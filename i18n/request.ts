import { getRequestConfig } from 'next-intl/server';
import { IntlErrorCode } from 'next-intl';
import { cookies } from 'next/headers';
import { readFileSync } from 'fs';

export default getRequestConfig(async () => {
	// Provide a static locale, fetch a user setting,
	// read from `cookies()`, `headers()`, etc.

  const locale = cookies().get('NEXT_LOCALE')?.value || 'en-US';
  
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
