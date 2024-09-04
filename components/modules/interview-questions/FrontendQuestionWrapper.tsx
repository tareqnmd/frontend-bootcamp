import { InterviewQuestionType } from '@/types/interview-questions';
import CodeBlock from '../common/CodeBlock';
import FrontendQuestion from './FrontendQuestion';

const FrontendQuestionWrapper = ({
	question,
	children,
	codeString = '',
}: {
	question: InterviewQuestionType;
	children: React.ReactNode;
	codeString: string;
}) => {
	return (
		<div className="flex flex-col gap-4">
			<FrontendQuestion question={question} />
			<h2 className="text-xl font-bold w-max border-b-2 border-b-black dark:border-b-white">
				Solution:
			</h2>
			{children}
			<br />
			<CodeBlock codeString={codeString} />
		</div>
	);
};

export default FrontendQuestionWrapper;
