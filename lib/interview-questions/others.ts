const initialPath = '/interview-questions/others/';
export const questionsFromOthers = [
	{
		key: 'color_memory',
		href: initialPath + 'color-memory',
		question_link:
			'https://devtools.tech/questions/s/how-to-build-color-memory-game-in-react-js-frontend-coding-challenge---qid---1wFNDiwjxcKwrHL65SN5',
		title: 'How to build color memory game in React.js?',
		description: `
            <h2 class="text-xl font-bold">Functional Requirement</h2>
            <div><ol><li><p><strong>Total Number of Boxes:</strong></p><ul><li>The main Game component should accept a total number of boxes.</li><li>The Game board should always have 4 columns and rows should be adjusted based on that.</li><li>The total number of boxes must always be divisible by 4 (column length).</li></ul></li><li><p><strong>Color Assignment:</strong></p><ul><li>The total number of unique colors should be exactly half the number of boxes.</li><li>Each color should be assigned to two boxes, forming pairs.</li></ul></li><li><p><strong>Initial State:</strong></p><ul><li>All boxes should initially have a white background color.</li></ul></li><li><p><strong>Revealing Colors:</strong></p><ul><li>When a user clicks on a box, the box's assigned color should be revealed.</li><li>If the user clicks on a second box and the colors do not match, both boxes should reset to a white background after 400 ms.</li><li>If the colors match, the pair should remain revealed for the rest of the game.</li></ul></li><li><p><strong>Round Tracking:</strong></p><ul><li>Every pair selection (whether successful or unsuccessful) should count as one round.</li><li>At the end of the game, the user should be informed of the total number of rounds taken to complete the game.</li></ul></li><li><p><strong>Reset Functionality:</strong></p><ul><li>The game should include a reset button.</li><li>The reset button should be enabled only at the end of the game, allowing the user to reset and restart the game.</li></ul></li></ol></div>
        `,
		tags: ['others', 'beginner', 'javascript', 'react'],
	},
];
