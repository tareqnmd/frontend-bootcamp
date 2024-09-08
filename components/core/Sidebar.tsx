import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';
import AppLogo from './AppLogo';
import NavLink from './NavLink';
const Sidebar = ({
	localeMenus,
	menus,
}: {
	menus: { key: string; href: string }[];
	localeMenus: any;
}) => {
	return (
		<>
			<button className="lg:hidden">
				<RxHamburgerMenu />
			</button>
			<aside className="lg:hidden border-l fixed top-0 right-0 bottom-0 left-0 bg-white">
				<div className="sidebar-close flex items-center justify-between p-3 border-b">
					<AppLogo />
					<button className="flex items-center justify-end">
						<TfiClose />
					</button>
				</div>
				<div className="flex flex-col items-center justify-center gap-2 p-3">
					{menus.map((menu) => (
						<NavLink
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
