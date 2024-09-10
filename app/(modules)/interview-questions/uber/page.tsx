import FrontendQuestionsList from '@/components/modules/interview-questions/FrontendQuestionsList';
import { questionsFromUber } from '@/lib/module/interview-questions/uber';

const page = async () => {
	return <FrontendQuestionsList menus={questionsFromUber} />;
};

export default page;
