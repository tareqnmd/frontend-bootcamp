import { initialPathChallenge } from '../helper';
import { HundredDayCSSChallenge } from './100-day-css';

export const challenges = [
	{
		key: 'hundred_day_css',
		label: '100 Days CSS',
		href: initialPathChallenge + 'hundred-day-css',
		questions: HundredDayCSSChallenge,
	},
];

export const getChallenge = (key: string, challengeKey: string) => {
	try {
		const from = challenges?.find((from) => from.key === key);
		const questions = from?.questions ?? [];
		return questions.find((challenge) => challenge.key === challengeKey);
	} catch (error) {
		return null;
	}
};
