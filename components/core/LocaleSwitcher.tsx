'use client';
import { locales } from '@/lib/helper/locales';
import { setUserLocale } from '@/lib/helper/server-func';
import { useLocale } from 'next-intl';
import { startTransition } from 'react';

export default function LocaleSwitcher() {
	const locale = useLocale();
	function onChange(e: any) {
		const locale = e.target.value;
		startTransition(() => {
			setUserLocale(locale);
		});
	}
	return (
		<div className="relative">
			<select
				defaultValue={locale}
				onChange={onChange}
			>
				{locales.map((item) => (
					<option
						key={item}
						value={item}
					>
						{item}
					</option>
				))}
			</select>
		</div>
	);
}
