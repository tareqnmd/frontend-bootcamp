import FrontendQuestionsList from '@/components/modules/interview-questions/FrontendQuestionsList';
import { questionsFromOthers } from '@/lib/interview-questions/others';
import { getTranslations } from 'next-intl/server';

const page = async () => {
	const t = await getTranslations('InterviewQuestions');
	return (
		<FrontendQuestionsList
			menus={questionsFromOthers}
			title={t('others_title')}
		/>
	);
};

export default page;
