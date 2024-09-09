import FrontendQuestionWrapper from '@/components/modules/interview-questions/FrontendQuestionWrapper';
import InteractiveShape from '@/components/modules/interview-questions/uber/interactive-shape/InteractiveShape';
import { getInterviewQuestion } from '@/lib/interview-questions';
const page = () => {
	const question = getInterviewQuestion('uber', 'interactive_shape');
	return question ? (
		<FrontendQuestionWrapper question={question}>
			<InteractiveShape />
		</FrontendQuestionWrapper>
	) : null;
};

export default page;
