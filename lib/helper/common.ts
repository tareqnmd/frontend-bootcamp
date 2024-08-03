import { format } from 'date-fns';
import { defaultLocale, locales } from './locales';

export const getError = (error: any, defaultMessage = 'Error Found') => {
	return error?.data?.message ?? defaultMessage;
};

export const toQueryString = (obj: any) => {
	const filteredObj = Object.fromEntries(
		Object.entries(obj).filter(([_, value]) => value !== '')
	);
	const encodedKeyValuePairs = Object.entries(filteredObj).map(
		([key, value]: any) => {
			return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
		}
	);
	return `?${encodedKeyValuePairs.join('&')}`;
};

export const dateFormat = (date: string, formatType = 'yyyy-MM-dd') => {
	const formattedDate = format(new Date(date), formatType);
	return formattedDate;
};

export const basePublicPath = ['/login', '/registration', '/forgot-password'];
export const publicPaths = () => {
	const paths = locales.map((locale) =>
		basePublicPath.map((path) =>
			defaultLocale === locale ? path : `/${locale}${path}`
		)
	);
	return paths.flat();
};
