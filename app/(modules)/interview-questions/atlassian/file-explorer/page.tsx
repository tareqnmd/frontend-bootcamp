import FileExplorer from '@/components/modules/interview-questions/atlassian/FileExplorer';
import FrontendQuestionWrapper from '@/components/modules/interview-questions/FrontendQuestionWrapper';
import { getInterviewQuestion } from '@/lib/interview-questions';
const page = () => {
	const question = getInterviewQuestion('atlassian', 'file_explorer');
	return question ? (
		<FrontendQuestionWrapper question={question}>
			<FileExplorer />
		</FrontendQuestionWrapper>
	) : null;
};

export default page;
