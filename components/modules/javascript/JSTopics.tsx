'use client';
import { javascriptMenusType } from '@/lib/module/javascript/menu';
import JSTopic from './JSTopic';
const JSTopics = ({
	menus = [],
	parentIndex,
}: {
	menus: javascriptMenusType;
	parentIndex?: string;
}) => {
	return (
		<ul className="flex flex-col gap-1">
			{menus.map((menu, index) => (
				<JSTopic
					key={menu.key}
					menu={menu}
					index={index}
					parentIndex={parentIndex}
				/>
			))}
		</ul>
	);
};

export default JSTopics;
