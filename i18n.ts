import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from './lib/helper/locales';

export default getRequestConfig(async () => {
	const locale = defaultLocale;
	return {
		locale,
		messages: (await import(`./locales/${locale}.json`)).default,
	};
});
