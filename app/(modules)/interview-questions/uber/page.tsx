import FrontendQuestionsList from '@/components/modules/interview-questions/FrontendQuestionsList';
import { frontendUberQuestionOptions } from '@/lib/menu';
import { getTranslations } from 'next-intl/server';

const page = async () => {
	const t = await getTranslations('Navbar');
	const localeMenus = t.raw('frontendUberMenus');
	return (
		<FrontendQuestionsList
			menus={frontendUberQuestionOptions}
			locale={localeMenus}
			title={localeMenus.title}
		/>
	);
};

export default page;
