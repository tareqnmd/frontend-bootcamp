'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';
import NavLink from '../NavLink';
const Sidebar = ({
	localeMenus,
	menus,
}: {
	menus: { key: string; href: string }[];
	localeMenus: any;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			{!isOpen ? (
				<button
					className="lg:hidden"
					onClick={() => setIsOpen(true)}
				>
					<RxHamburgerMenu />
				</button>
			) : (
				<button
					className="lg:hidden"
					onClick={() => setIsOpen(false)}
				>
					<TfiClose />
				</button>
			)}
			<aside
				className={cn(
					'lg:hidden fixed transition-all duration-100 left-0 right-0 overflow-hidden top-[61px]',
					isOpen ? 'bottom-0' : 'bottom-full'
				)}
			>
				<div className="flex flex-col items-center justify-center gap-2 p-3">
					{menus.map((menu) => (
						<NavLink
							onClick={() => setIsOpen(false)}
							key={menu.href}
							href={menu.href}
							label={localeMenus[menu.key]}
						/>
					))}
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
