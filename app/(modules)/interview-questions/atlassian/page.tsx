import FrontendQuestionsList from '@/components/modules/interview-questions/FrontendQuestionsList';
import { questionsFromAtlassian } from '@/lib/interview-questions/atlassian';
import { getTranslations } from 'next-intl/server';

const page = async () => {
	const t = await getTranslations('InterviewQuestions');
	return (
		<FrontendQuestionsList
			menus={questionsFromAtlassian}
			title={t('atlassian_title')}
		/>
	);
};

export default page;
