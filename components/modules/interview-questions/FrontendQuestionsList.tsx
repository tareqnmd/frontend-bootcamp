import { MenuTypes } from '@/lib/menu';
import Link from 'next/link';

const FrontendQuestionsList = ({
	menus,
	locale,
	title,
}: {
	menus: MenuTypes;
	locale: Record<string, string>;
	title: string;
}) => {
	return (
		<div className="grid gap-2">
			<strong className="text-xl border-b border-black">{title}</strong>
			<ul className="grid gap-4">
				{menus.map((menu, index) => (
					<li
						key={menu.key}
						className="flex  gap-1"
					>
						<span>{index + 1}.</span>
						<Link
							key={menu.href}
							href={menu.href}
							className="text-sm text-blue-700 underline"
						>
							{locale[menu.key]}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FrontendQuestionsList;
