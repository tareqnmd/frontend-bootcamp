'use client';
import { Prism } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = ({ codeString }: { codeString: string }) => {
	return (
		<Prism
			language="javascript"
			style={dark}
		>
			{codeString}
		</Prism>
	);
};

export default CodeBlock;
