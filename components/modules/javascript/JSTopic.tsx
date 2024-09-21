import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { HiOutlineMinus } from 'react-icons/hi';
import JSTopics from './JSTopics';
const JSTopic = ({ menu, index, parentIndex }: any) => {
	const parentIndexString =
		(parentIndex ? parentIndex : '') + (index + 1) + '.';
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (
			menu?.childMenu?.find(
				(childMenu: { href: string }) => childMenu?.href === pathname
			)
		) {
			setIsOpen(true);
		}
	}, [menu, pathname]);

	return (
		<li
			className="ml-2"
			key={menu.key}
		>
			{menu.href ? (
				<Link
					className={cn(
						'text-sm font-medium hover:text-blue-500',
						pathname === menu.href ? 'text-blue-500' : ''
					)}
					href={menu.href}
				>
					{parentIndexString} {menu.label}
				</Link>
			) : (
				<div
					onClick={() => setIsOpen((prev) => !prev)}
					className="cursor-pointer font-semibold flex items-center justify-between gap-1"
				>
					{parentIndexString} {menu.label}
					{menu.childMenu ? (
						!isOpen ? (
							<GoPlus className="text-lg shrink-0" />
						) : (
							<HiOutlineMinus className="text-lg shrink-0" />
						)
					) : (
						''
					)}
				</div>
			)}
			{menu.childMenu && isOpen ? (
				<JSTopics
					menus={menu.childMenu}
					parentIndex={parentIndexString}
				/>
			) : null}
		</li>
	);
};

export default JSTopic;
