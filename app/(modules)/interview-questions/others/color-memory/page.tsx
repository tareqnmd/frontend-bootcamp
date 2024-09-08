import FrontendQuestionWrapper from '@/components/modules/interview-questions/FrontendQuestionWrapper';
import ColorMemory from '@/components/modules/interview-questions/others/ColorMemory';
import { questionsFromOthers } from '@/lib/interview-questions/others';
const page = () => {
	const question = questionsFromOthers.find(
		(question) => question.key === 'color_memory'
	);
	return question ? (
		<FrontendQuestionWrapper question={question}>
			<ColorMemory />
		</FrontendQuestionWrapper>
	) : null;
};

export default page;
