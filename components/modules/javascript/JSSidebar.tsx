import { javascriptMenu } from '@/lib/module/javascript/menu';
import JSTopics from './JSTopics';

const JSSidebar = () => {
	return (
		<div className="border-r dark:border-[#444]dark:border-light w-[220px] h-full pr-4">
			<JSTopics menus={javascriptMenu} />
		</div>
	);
};

export default JSSidebar;
