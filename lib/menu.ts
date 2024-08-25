export type MenuType = {
	key: string;
	href: string;
};
export type MenuTypes = MenuType[];

export const menus = [
	{
		key: 'frontend_questions',
		href: '/frontend-questions',
	},
	{
		key: 'javascript',
		href: '/javascript',
	},
];

export const frontendQuestionOptions = [
	{
		key: 'uber',
		href: '/frontend-questions/uber',
	},
];

export const frontendUberQuestionOptions = [
	{
		key: 'interactive_shape',
		href: '/frontend-questions/uber/interactive-shape',
	},
];
