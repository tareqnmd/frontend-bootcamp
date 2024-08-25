'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import FrontendQuestion from '../../FrontendQuestion';

const boxData = [
	[1, 1, 1],
	[1, 0, 0],
	[1, 1, 1],
];
const question =
	'https://devtools.tech/questions/s/how-to-create-an-interactive-shape-based-ui-uber-frontend-interview-question-or-javascript-or-react-js---qid---6FVH1ZMWMXd4uZ8WAGEi';
const InteractiveShape = () => {
	const [checkedBox, setCheckedBox] = useState<string[]>([]);
	const totalBoxData = boxData.flat().filter((item) => item === 1).length;
	const [processing, setProcessing] = useState(false);

	// const clearBox = () => {
	// 	try {
	// 		setProcessing(true);
	// 		for (let i = 0; i < totalBoxData; i++) {
	// 			const timeout = setTimeout(() => {
	// 				setCheckedBox((prev) => prev.slice(1, prev.length));
	// 				clearTimeout(timeout);
	// 			}, 500 * (i + 1));
	// 		}
	// 		setTimeout(() => {
	// 			setProcessing(false);
	// 		}, 500 * (totalBoxData + 1));
	// 	} catch (error) {}
	// };

	const clearBox = async () => {
		try {
			setProcessing(true);
			const promises = Array.from(Array(totalBoxData).keys()).map(
				(i) =>
					new Promise<void>((resolve) => {
						setTimeout(() => {
							setCheckedBox((prev) => prev.slice(1, prev.length));
							resolve();
						}, 500 * (i + 1));
					})
			);
			await Promise.all(promises);
			setProcessing(false);
		} catch (error) {
			console.error(error);
		}
	};

	const boxHandler = (i: number, j: number, col: number) => {
		if (processing || col === 0 || checkedBox.includes(`${i}-${j}`)) return;
		const updatedCheckedBox = [...checkedBox, `${i}-${j}`];
		setCheckedBox(updatedCheckedBox);
		if (updatedCheckedBox.length === totalBoxData) {
			clearBox();
		}
	};

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
								onClick={() => boxHandler(i, j, col)}
								className={cn(
									'w-full',
									col && 'border-2',
									col && !checkedBox.includes(`${i}-${j}`) && 'cursor-pointer',
									checkedBox.includes(`${i}-${j}`) && 'bg-[#0bcc59]'
								)}
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default InteractiveShape;
