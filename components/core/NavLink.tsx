'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({
	href,
	label,
	onClick = () => null,
}: {
	href: string;
	label: string;
	onClick?: () => void;
}) => {
	const pathname = usePathname();
	return (
		<Link
			className={cn(
				'hover:underline',
				pathname.startsWith(href) && 'underline'
			)}
			href={href}
			onClick={onClick}
		>
			{label}
		</Link>
	);
};

export default NavLink;
