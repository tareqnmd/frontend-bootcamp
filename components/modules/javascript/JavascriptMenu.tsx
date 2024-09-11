import { javascriptMenusType } from '@/lib/module/javascript/menu';
import Link from 'next/link';

const JavascriptMenu = ({ menus = [] }: { menus: javascriptMenusType }) => {
	return (
		<ul className="flex flex-col gap-1">
			{menus.map((menu: any) => (
				<li
					className="ml-2"
					key={menu.key}
				>
					{menu.href ? (
						<Link href={menu.href}>{menu.label}</Link>
					) : (
						<span className="font-bold">{menu.label}</span>
					)}
					{menu.childMenu ? <JavascriptMenu menus={menu.childMenu} /> : null}
				</li>
			))}
		</ul>
	);
};

export default JavascriptMenu;
