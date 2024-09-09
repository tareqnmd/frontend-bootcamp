'use client';
import useOutsideClick from '@/hooks/useOutsideClick';
import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';
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
	const asideRef: any = useRef();
	useOutsideClick(asideRef, () => setIsOpen(false), true);
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
				ref={asideRef}
				className={cn(
					'lg:hidden border-l theme fixed transition-all duration-300 w-[220px] overflow-hidden top-[61px] bottom-0',
					isOpen ? 'right-0' : '-right-[220px]'
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
