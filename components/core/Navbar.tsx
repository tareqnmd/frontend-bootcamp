import { menus } from '@/lib/menu';
import Link from 'next/link';
import LocaleSwitcher from './LocaleSwitcher';
const Navbar = () => {
	return (
		<nav className="bg-secondary">
			<div className="container py-[10px] xl:py-[20px] flex items-center justify-between gap-8 font-[400]">
				<Link
					className="text-xl font-bold"
					href="/"
				>
					JS.
				</Link>
				<div className="flex items-center gap-2">
					{menus.map((menu) => (
						<Link
							key={menu.href}
							href={menu.href}
						>
							{menu.label}
						</Link>
					))}
					<LocaleSwitcher />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
