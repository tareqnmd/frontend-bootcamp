'use server';

import { cookies } from 'next/headers';
import { defaultLocale, LocalesType } from './locales';

const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
	return cookies().get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: LocalesType) {
	cookies().set(COOKIE_NAME, locale);
}
