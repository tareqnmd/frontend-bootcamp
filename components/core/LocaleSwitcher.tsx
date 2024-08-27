'use client';
import { setUserLocale } from '@/lib/helper/server-func';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { startTransition } from 'react';

export default function LocaleSwitcher() {
	const locale = useLocale();
	function onChange(e: any) {
		startTransition(() => {
			setUserLocale(e.target.checked ? 'bn' : 'en');
		});
	}
	return (
		<label className="inline-flex items-center cursor-pointer">
			<input
				type="checkbox"
				className="sr-only peer"
				checked={locale === 'bn'}
				onChange={onChange}
			/>
			<div
				className={cn(
					"relative w-11 h-6 bg-white rounded-full px-1 text-[12px] leading-[12px] grid items-center text-black peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-gray-200 after:rounded-full after:h-5 after:w-5 after:transition-all",
					locale === 'en' && 'text-right'
				)}
			>
				{locale}
			</div>
		</label>
	);
}
