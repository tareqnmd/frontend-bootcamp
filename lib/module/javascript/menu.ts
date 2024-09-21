export type javascriptMenusType = {
	key: string;
	label: string;
	href?: string;
	childMenu?: javascriptMenusType;
}[];

export const javascriptMenu = [
	{
		key: 'es6_10',
		label: 'ES6-10',
		childMenu: [
			{
				key: 'let_const',
				label: 'Let & Const',
				href: '/javascript/es6-10/let-const',
			},
		],
	},
];
