import FrontendQuestionWrapper from '@/components/modules/interview-questions/FrontendQuestionWrapper';
import ColorMemory from '@/components/modules/interview-questions/others/ColorMemory';
import { getInterviewQuestion } from '@/lib/module/interview-questions';
const page = () => {
	const question = getInterviewQuestion('others', 'color_memory');
	return question ? (
		<FrontendQuestionWrapper question={question}>
			<ColorMemory />
		</FrontendQuestionWrapper>
	) : null;
};

export default page;
