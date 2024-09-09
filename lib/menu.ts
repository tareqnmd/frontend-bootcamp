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
		key: 'challenge',
		href: '/challenge',
	},
	{
		key: 'problem_solving',
		href: '/problem-solving',
	},
];
