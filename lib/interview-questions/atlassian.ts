import { initialPath, requirementText } from "./helper";

const path = initialPath + 'atlassian/';
export const questionsFromAtlassian = [
	{
		key: 'file_explorer',
		href: path + 'file-explorer',
		question_link:
			'https://devtools.tech/questions/s/how-to-build-a-file-explorer-atlassian-frontend-machine-coding-round-question-or-javascript-interview-question-or-react-js---qid---i2WQCZkIdpwGp2tG1LXJ',
		title: 'How to build a File Explorer?',
		description: `
            ${requirementText}
            <div><ul><li>Can be used to create folders, sub-folders, and files.</li><li>The files menu should be collapsible. The Icon should change based on the Menu's state.</li><li>Files &amp; Folders should have proper icons.</li><li>Folder state could be open or close. Icon should be based on the Folder's state.</li><li>A folder's content could be sub-folders/files. The contents should only be visible whenever a folder is in open state.</li><li>Each node (file/folder) should be properly indented based on the depth/level.</li><li>One should be only able to add a new file/folder to an existing folder.</li><li>One should be able to delete any file or folder.</li><li>One should be able to rename any file or folder. Show an in-place input for renaming.</li><li>If the newly created file name is empty then it should be deleted automatically.</li><li>If a rename operation is performed on an existing file and the name provided is empty then we should showcase an error.</li><li>Highlight the node name on hover.</li><li>Node controls should be only visible on hover.</li><li>Try to use all the best practices and organise your code into reusable components/functions.</li></ul></div>
        `,
		tags: ['atlassian', 'intermediate', 'javascript', 'react'],
	},
];
