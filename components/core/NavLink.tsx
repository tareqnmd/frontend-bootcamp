'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, label }: { href: string; label: string }) => {
	const pathname = usePathname();
	return (
		<Link
			className={cn(
				'hover:underline',
				pathname.startsWith(href) && 'underline'
			)}
			href={href}
		>
			{label}
		</Link>
	);
};

export default NavLink;
