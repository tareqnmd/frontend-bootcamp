export type javascriptMenusType = {
	key: string;
	label: string;
	href?: string;
	childMenu?: javascriptMenusType;
}[];

export const javascriptMenu = [
	{
		key: 'js_fundamentals',
		label: 'JS Fundamentals',
		childMenu: [
			{
				key: 'js_fundamentals_introduction',
				label: 'JS Fundamentals Introduction',
				href: '/javascript/js-fundamentals/introduction',
			},
		],
	},
	{
		key: 'dom',
		label: 'DOM',
		childMenu: [
			{
				key: 'dom_introduction',
				label: 'DOM Introduction',
				href: '/javascript/dom/introduction',
			},
		],
	},
	{
		key: 'client_storage',
		label: 'Client Storage',
		childMenu: [
			{
				key: 'client_storage_introduction',
				label: 'Client Storage Introduction',
				href: '/javascript/client-storage/introduction',
			},
			{
				key: 'cookies',
				label: 'Cookies',
				href: '/javascript/client-storage/cookies',
			},
			{
				key: 'local_storage',
				label: 'Local Storage',
				href: '/javascript/client-storage/local-storage',
			},
			{
				key: 'session_storage',
				label: 'Session Storage',
				href: '/javascript/client-storage/session-storage',
			},
			{
				key: 'index_db',
				label: 'Index DB',
				href: '/javascript/client-storage/index-db',
			},
		],
	},
	{
		key: 'asynchronous_javascript',
		label: 'Asynchronous Javascript',
		childMenu: [
			{
				key: 'asynchronous_javascript_introduction',
				label: 'Asynchronous Javascript Introduction',
				href: '/javascript/asynchronous-javascript/introduction',
			},
			{
				key: 'handle_asynchronous_javascript',
				label: 'Handle Asynchronous Javascript',
				href: '/javascript/asynchronous-javascript/handle-asynchronous-javascript',
			},
			{
				key: 'ajax',
				label: 'Ajax',
				href: '/javascript/asynchronous-javascript/ajax',
			},
			{
				key: 'event_loop',
				label: 'Event Loop',
				href: '/javascript/asynchronous-javascript/event-loop',
			},
		],
	},
	{
		key: 'error_handling',
		label: 'Error Handling',
		childMenu: [
			{
				key: 'error_handling_introduction',
				label: 'Error Handling Introduction',
				href: '/javascript/error-handling/introduction',
			},
		],
	},
	{
		key: 'es6_10',
		label: 'ES6-10',
		childMenu: [
			{
				key: 'es6_10_introduction',
				label: 'ES6-10 Introduction',
				href: '/javascript/es6-10/introduction',
			},
			{
				key: 'let_const',
				label: 'Let & Const',
				href: '/javascript/es6-10/let-const',
			},
			{
				key: 'template_literals',
				label: 'Template Literals',
				href: '/javascript/es6-10/template-literals',
			},
			{
				key: 'destructuring',
				label: 'Destructuring',
				href: '/javascript/es6-10/destructuring',
			},
			{
				key: 'spread_rest_operator',
				label: 'Spread & Rest Operator',
				href: '/javascript/es6-10/spread-rest-operator',
			},
			{
				key: 'default_parameters',
				label: 'Default Parameters',
				href: '/javascript/es6-10/default-parameters',
			},
			{
				key: 'arrow_function',
				label: 'Arrow Function',
				href: '/javascript/es6-10/arrow-function',
			},
			{
				key: 'find_fill',
				label: 'Find & Fill',
				href: '/javascript/es6-10/find-fill',
			},
			{
				key: 'for_in_of',
				label: 'For In & For Of',
				href: '/javascript/es6-10/for-in-of',
			},
			{
				key: 'class',
				label: 'Class',
				href: '/javascript/es6-10/class',
			},
			{
				key: 'symbols',
				label: 'Symbols',
				href: '/javascript/es6-10/symbols',
			},
			{
				key: 'iterators_generators',
				label: 'Iterators & Generators',
				href: '/javascript/es6-10/iterators-generators',
			},
			{
				key: 'promise_async_await',
				label: 'Promise & Async Await',
				href: '/javascript/es6-10/promise-async-await',
			},
			{
				key: 'map_set',
				label: 'Map & Set',
				href: '/javascript/es6-10/map-set',
			},
			{
				key: 'proxies_reflection',
				label: 'Proxies & Reflection',
				href: '/javascript/es6-10/proxies-reflection',
			},
			{
				key: 'number_math',
				label: 'Number & Math',
				href: '/javascript/es6-10/number-math',
			},
			{
				key: 'array_object',
				label: 'Array & Object',
				href: '/javascript/es6-10/array-object',
			},
			{
				key: 'modules',
				label: 'Modules',
				href: '/javascript/es6-10/modules',
			},
			{
				key: 'exponentiation_operator_trailing_commas',
				label: 'Exponentiation Operator & Trailing Commas',
				href: '/javascript/es6-10/exponentiation-operator-trailing-commas',
			},
			{
				key: 'object_keys_values_entries',
				label: 'Object Keys & Values & Entries',
				href: '/javascript/es6-10/object-keys-values-entries',
			},
			{
				key: 'includes_flat_flat_map',
				label: 'Array Includes & Array Flat & Array Flat Map',
				href: '/javascript/es6-10/includes-flat-flat-map',
			},
			{
				key: 'global_this',
				label: 'Global This',
				href: '/javascript/es6-10/global-this',
			},
			{
				key: 'optional_chaining_nullish_coalescing',
				label: 'Optional Chaining & Nullish Coalescing',
				href: '/javascript/es6-10/optional-chaining-nullish-coalescing',
			},
		],
	},
];
