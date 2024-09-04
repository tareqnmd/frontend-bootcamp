import FrontendQuestionWrapper from '@/components/modules/interview-questions/FrontendQuestionWrapper';
import InteractiveShape from '@/components/modules/interview-questions/uber/interactive-shape/InteractiveShape';
import { questionsFromUber } from '@/lib/interview-questions/uber';
const page = () => {
	const question = questionsFromUber.find(
		(question) => question.key === 'interactive_shape'
	);
	return question ? (
		<FrontendQuestionWrapper question={question}>
			<InteractiveShape />
		</FrontendQuestionWrapper>
	) : null;
};

export default page;
