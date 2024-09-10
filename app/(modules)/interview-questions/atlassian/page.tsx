import FrontendQuestionsList from '@/components/modules/interview-questions/FrontendQuestionsList';
import { questionsFromAtlassian } from '@/lib/module/interview-questions/atlassian';

const page = async () => {
	return <FrontendQuestionsList menus={questionsFromAtlassian} />;
};

export default page;
