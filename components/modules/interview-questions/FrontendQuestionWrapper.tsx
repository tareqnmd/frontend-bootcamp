import FrontendQuestion from './FrontendQuestion';

const FrontendQuestionWrapper = ({
	question,
	children,
}: {
	question: string;
	children: React.ReactNode;
}) => {
	return (
		<div className="flex flex-col gap-2">
			<FrontendQuestion question={question} />
			{children}
		</div>
	);
};

export default FrontendQuestionWrapper;
