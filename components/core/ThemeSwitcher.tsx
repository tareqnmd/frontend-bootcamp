'use client';
import { setUserLocale } from '@/lib/helper/server-func';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { startTransition } from 'react';
import { RiEnglishInput } from 'react-icons/ri';
export default function ThemeSwitcher() {
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
			className={cn('border p-1 rounded text-[14px] bg-[#C4DAD2]')}
			onClick={onChange}
		>
			{english ? <RiEnglishInput /> : 'অ'}
		</button>
	);
}
