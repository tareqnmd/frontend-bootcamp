import FrontendQuestionWrapper from '@/components/modules/interview-questions/FrontendQuestionWrapper';
import InteractiveShape from '@/components/modules/interview-questions/uber/interactive-shape/InteractiveShape';
const question =
	'https://devtools.tech/questions/s/how-to-create-an-interactive-shape-based-ui-uber-frontend-interview-question-or-javascript-or-react-js---qid---6FVH1ZMWMXd4uZ8WAGEi';

const page = () => {
	return (
		<FrontendQuestionWrapper question={question}>
			<InteractiveShape />
		</FrontendQuestionWrapper>
	);
};

export default page;
