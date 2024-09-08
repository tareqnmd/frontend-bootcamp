import { menus } from '@/lib/menu';
import { getTranslations } from 'next-intl/server';
import AppLogo from './AppLogo';
import LocaleSwitcher from './LocaleSwitcher';
import NavLink from './NavLink';
import Sidebar from './Sidebar';
import ThemeSwitcher from './ThemeSwitcher';
const Navbar = async () => {
	const t = await getTranslations('Navbar');
	const localeMenus = t.raw('menus');
	return (
		<nav className="border-b">
			<div className="container py-[10px] xl:py-[20px] flex items-center justify-between gap-8 font-[400]">
				<AppLogo />
				<div className="flex items-center gap-4">
					<div className="links hidden lg:flex items-center gap-4">
						{menus.map((menu) => (
							<NavLink
								key={menu.href}
								href={menu.href}
								label={localeMenus[menu.key]}
							/>
						))}
					</div>
					<div className="flex items-center gap-2">
						<LocaleSwitcher />
						<ThemeSwitcher />
					</div>
					<Sidebar
						localeMenus={localeMenus}
						menus={menus}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
