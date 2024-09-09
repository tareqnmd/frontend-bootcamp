import { questionsFromAtlassian } from './atlassian';
import { questionsFromOthers } from './others';
import { questionsFromUber } from './uber';

export const interviewQuestions = [
	{
		key: 'uber',
		href: '/interview-questions/uber',
		questions: questionsFromUber,
	},
	{
		key: 'atlassian',
		href: '/interview-questions/atlassian',
		questions: questionsFromAtlassian,
	},
	{
		key: 'others',
		href: '/interview-questions/others',
		questions: questionsFromOthers,
	},
];

export const getInterviewQuestion = (key: string, questionKey: string) => {
	try {
		const from = interviewQuestions?.find((from) => from.key === key);
		const questions = from?.questions ?? [];
		return questions.find((question) => question.key === questionKey);
	} catch (error) {
		return null;
	}
};
