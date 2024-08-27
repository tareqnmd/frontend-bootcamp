import { InterviewQuestionType } from '@/types/interview-questions';
import FrontendQuestion from './FrontendQuestion';

const FrontendQuestionWrapper = ({
	question,
	children,
}: {
	question: InterviewQuestionType;
	children: React.ReactNode;
}) => {
	return (
		<div className="flex flex-col gap-4">
			<FrontendQuestion question={question} />
			<h2 className="text-xl font-bold w-max border-b-2 border-b-black">
				Solution:
			</h2>
			{children}
		</div>
	);
};

export default FrontendQuestionWrapper;
