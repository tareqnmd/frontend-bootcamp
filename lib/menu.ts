export type MenuType = {
	key: string;
	href: string;
};
export type MenuTypes = MenuType[];

export const menus = [
	{
		key: 'javascript',
		href: '/javascript',
	},
	{
		key: 'interview_questions',
		href: '/interview-questions',
	},
	{
		key: 'problem_solving',
		href: '/problem-solving',
	},
];

export const frontendQuestionOptions = [
	{
		key: 'uber',
		href: '/interview-questions/uber',
	},
];

export const frontendUberQuestionOptions = [
	{
		key: 'interactive_shape',
		href: '/interview-questions/uber/interactive-shape',
	},
];
