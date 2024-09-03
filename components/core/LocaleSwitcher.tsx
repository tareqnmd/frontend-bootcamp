'use client';
import { setUserLocale } from '@/lib/helper/server-func';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { startTransition } from 'react';
export default function LocaleSwitcher() {
	const locale = useLocale();
	const english = locale === 'en';
	function onChange() {
		startTransition(() => {
			setUserLocale(english ? 'bn' : 'en');
		});
	}
	return (
		<button
			style={{ lineHeight: '14px' }}
			className={cn('p-1 rounded text-[14px]')}
			onClick={onChange}
		>
			{english ? 'En' : 'বাং'}
		</button>
	);
}
