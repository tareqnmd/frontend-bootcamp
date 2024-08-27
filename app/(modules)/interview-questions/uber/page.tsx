import FrontendQuestionsList from '@/components/modules/interview-questions/FrontendQuestionsList';
import { questionsFromUber } from '@/lib/interview-questions/uber';
import { getTranslations } from 'next-intl/server';

const page = async () => {
	const t = await getTranslations('InterviewQuestions');
	return (
		<FrontendQuestionsList
			menus={questionsFromUber}
			title={t('uber_title')}
		/>
	);
};

export default page;
