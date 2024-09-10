import FrontendQuestionsList from '@/components/modules/interview-questions/FrontendQuestionsList';
import { questionsFromOthers } from '@/lib/module/interview-questions/others';

const page = async () => {
	return <FrontendQuestionsList menus={questionsFromOthers} />;
};

export default page;
