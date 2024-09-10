import { questionsFromAtlassian } from './atlassian';
import { questionsFromOthers } from './others';
import { questionsFromUber } from './uber';

export const interviewQuestions = [
	{
		key: 'uber',
		label: 'Uber',
		href: '/interview-questions/uber',
		questions: questionsFromUber,
	},
	{
		key: 'atlassian',
		label: 'Atlassian',
		href: '/interview-questions/atlassian',
		questions: questionsFromAtlassian,
	},
	{
		key: 'others',
		label: 'Others',
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
