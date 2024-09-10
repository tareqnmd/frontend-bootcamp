import FrontendQuestionsList from '@/components/modules/interview-questions/FrontendQuestionsList';
import { HundredDayCSSChallenge } from '@/lib/module/challenge/100-day-css';

const page = async () => {
	return <FrontendQuestionsList menus={HundredDayCSSChallenge} />;
};

export default page;
