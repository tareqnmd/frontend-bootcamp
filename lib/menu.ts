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
		key: 'challenges',
		href: '/challenges',
	},
	{
		key: 'problem_solving',
		href: '/problem-solving',
	},
];
