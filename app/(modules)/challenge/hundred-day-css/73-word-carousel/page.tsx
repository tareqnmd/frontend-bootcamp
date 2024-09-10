import FrontendQuestionWrapper from '@/components/modules/interview-questions/FrontendQuestionWrapper';
import { getChallenge } from '@/lib/module/challenge';
import WordCarousel from '@/components/modules/challenge/hundred-day-css/WordCarousel';
const page = () => {
	const question = getChallenge('hundred_day_css', '73_word_carousel');
	return question ? (
		<FrontendQuestionWrapper question={question}>
			<WordCarousel />
		</FrontendQuestionWrapper>
	) : null;
};

export default page;
