import { initialPathIQ, requirementTextIQ } from '../helper';

const path = initialPathIQ + 'uber/';

export const questionsFromUber = [
	{
		key: 'interactive_shape',
		href: path + 'interactive-shape',
		question_link:
			'https://devtools.tech/questions/s/how-to-create-an-interactive-shape-based-ui-uber-frontend-interview-question-or-javascript-or-react-js---qid---6FVH1ZMWMXd4uZ8WAGEi',
		title: 'How to create an interactive shape based UI?',
		description: `
            ${requirementTextIQ}
            <div><ul><li>Create an empty box where array value is <code>1</code>.</li><li>User can select a box. Upon selection the box background color should change to <code>#0bcc59</code>.</li><li>Once all boxes are selected then the boxes should auto-deselect based on the order of selection.</li><li>Deselection should be non-interruptible as in once started, we can't stop it.</li><li>During de-selection, user should not be able to select a new box as in disable any box interaction.</li></ul></div>
        `,
		tags: ['uber', 'beginner', 'javascript', 'react'],
	},
];
