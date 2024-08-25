export type MenuType = {
	key: string;
	href: string;
};
export type MenuTypes = MenuType[];

export const menus = [
	{
		key: 'interview_questions',
		href: '/interview-questions',
	},
	{
		key: 'javascript',
		href: '/javascript',
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
