'use client';
import { setUserLocale } from '@/lib/helper/server-func';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { startTransition } from 'react';

export default function LocaleSwitcher() {
	const locale = useLocale();
	function onChange(e: any) {
		console.log('e.target', e.target.checked);
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
					"relative w-11 h-6 bg-gray-200 rounded-full px-1 text-xs peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600",
					locale === 'bn' ? 'text-white' : 'text-black text-right'
				)}
			>
				{locale}
			</div>
		</label>
	);
}
