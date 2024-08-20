import FrontendQuestion from '../../FrontendQuestion';

const boxData = [
	[1, 1, 1],
	[1, 0, 0],
	[1, 1, 1],
];
const question =
	'https://devtools.tech/questions/s/how-to-create-an-interactive-shape-based-ui-uber-frontend-interview-question-or-javascript-or-react-js---qid---6FVH1ZMWMXd4uZ8WAGEi';
const InteractiveShape = () => {
	return (
		<div className="flex flex-col gap-6">
			<FrontendQuestion question={question} />
			<div className="grid gap-4 w-[300px] h-[300px]">
				{boxData.map((row, i) => (
					<div
						className="flex gap-4"
						key={i}
					>
						{row.map((col, j) => (
							<div
								key={j}
								className={`w-full ${col ? 'border-2' : ''}`}
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default InteractiveShape;
