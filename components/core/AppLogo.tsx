'use client';
import darkLogo from '@/assets/images/dark-logo.png';
import logo from '@/assets/images/logo.png';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
const AppLogo = () => {
	const { theme } = useTheme();
	return (
		<Link
			className="text-xl font-bold"
			href="/"
		>
			<Image
				src={theme === 'dark' ? darkLogo : logo}
				alt="logo"
				width={50}
				height={50}
			/>
		</Link>
	);
};

export default AppLogo;
