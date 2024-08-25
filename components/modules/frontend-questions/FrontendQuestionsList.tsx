import { MenuTypes } from '@/lib/menu';
import Link from 'next/link';

const FrontendQuestionsList = ({
	menus,
	locale,
}: {
	menus: MenuTypes;
	locale: Record<string, string>;
}) => {
	return (
		<ul className="grid gap-4">
			{menus.map((menu, index) => (
				<li key={menu.key}>
					<Link
						key={menu.href}
						href={menu.href}
						className="text-sm text-blue-700 underline"
					>
						{index + 1}. {locale[menu.key]}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default FrontendQuestionsList;
