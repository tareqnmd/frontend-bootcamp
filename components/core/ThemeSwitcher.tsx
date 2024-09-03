'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5';
export default function ThemeSwitcher() {
	const { setTheme, theme } = useTheme();
	return (
		<button
			style={{ lineHeight: '14px' }}
			className={cn('border p-1 rounded text-[14px] bg-[#C4DAD2]')}
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? <IoMoonSharp /> : <IoSunnySharp />}
		</button>
	);
}
