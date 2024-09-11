'use client';
import { javascriptMenusType } from '@/lib/module/javascript/menu';
import Link from 'next/link';
import { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { HiOutlineMinus } from 'react-icons/hi';
const JavascriptMenu = ({
	menus = [],
	parentIndex,
}: {
	menus: javascriptMenusType;
	parentIndex: number;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<ul className="flex flex-col gap-1">
			{menus.map((menu, index) => (
				<li
					className="ml-2"
					key={menu.key}
				>
					{menu.href ? (
						<Link
							className="text-sm font-medium hover:text-blue-500"
							href={menu.href}
						>
							{parentIndex}.{index + 1}. {menu.label}
						</Link>
					) : (
						<span className="font-bold flex items-center justify-between gap-1">
							{index + 1}. {menu.label}
							{menu.childMenu ? (
								<button onClick={() => setIsOpen(!isOpen)}>
									{!isOpen ? <GoPlus /> : <HiOutlineMinus />}
								</button>
							) : (
								''
							)}
						</span>
					)}
					{menu.childMenu && isOpen ? (
						<JavascriptMenu
							menus={menu.childMenu}
							parentIndex={index + 1}
						/>
					) : null}
				</li>
			))}
		</ul>
	);
};

export default JavascriptMenu;
