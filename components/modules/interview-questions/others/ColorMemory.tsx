'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const boxes = [
	[1, 1, 1, 1],
	// [1, 1, 1, 1],
	// [1, 1, 1, 1],
	// [1, 1, 1, 1],
];
const flatBoxData = boxes.flat();

const getUniqueColor = () => {
	const min = 100000;
	const max = 999999;
	const colorCode = Math.floor(Math.random() * (max - min + 1)) + min;
	return colorCode;
};

const getUniqueColors = () => {
	const boxHalfLength = flatBoxData.length / 2;
	const uniqueColors: number[] = [];
	while (uniqueColors.length < boxHalfLength) {
		const color = getUniqueColor();
		if (!uniqueColors.includes(color)) {
			uniqueColors.push(color);
		}
	}
	return uniqueColors;
};

function makePairs(array: number[]) {
	const pairs = [];
	const shuffledArray = array.sort(() => 0.5 - Math.random());
	for (let i = 0; i < shuffledArray.length; i += 2) {
		pairs.push([shuffledArray[i], shuffledArray[i + 1]]);
	}
	return pairs;
}

const ColorMemory = () => {
	const [roundCount, setRoundCount] = useState(0);
	const [isGameOver, setIsGameOver] = useState(false);
	const [pauseGame, setPauseGame] = useState(false);
	const [selectedBoxes, setSelectedBoxes] = useState<number[]>([]);
	const [previouslySelectedBox, setPreviouslySelectedBox] = useState<
		number | null
	>(null);
	const [colorBoxData, setColorBoxData] = useState<
		{ color: number; boxes: number[] }[]
	>([]);

	const removeBoxItems = (boxes: number[]) => {
		setPauseGame(true);
		setTimeout(() => {
			setSelectedBoxes((prev) => prev.filter((box) => !boxes.includes(box)));
			setPauseGame(false);
		}, 400);
	};

	const gameOver = () => {
		setTimeout(() => {
			setIsGameOver(true);
		}, 400);
	};

	const handleBoxClick = (boxIndex: number) => {
		if (pauseGame || selectedBoxes.includes(boxIndex)) return;
		const boxData = colorBoxData.find((box) => box?.boxes.includes(boxIndex));
		if ((previouslySelectedBox === 0 || previouslySelectedBox) && boxData) {
			const sameColor = boxData?.boxes.includes(previouslySelectedBox);
			const updatedSelectedBox = [
				...selectedBoxes,
				previouslySelectedBox,
				boxIndex,
			];
			setSelectedBoxes(updatedSelectedBox);
			setPreviouslySelectedBox(null);
			setRoundCount((prev) => prev + 1);
			if (sameColor) {
				if (updatedSelectedBox.length === flatBoxData.length) {
					gameOver();
				}
			} else {
				removeBoxItems([previouslySelectedBox, boxIndex]);
			}
		} else {
			setPreviouslySelectedBox(boxIndex);
		}
	};

	const getBoxColor = (boxIndex: number) => {
		const boxData = colorBoxData.find((box) => box?.boxes.includes(boxIndex));
		return boxData?.color;
	};

	const resetGame = () => {
		setRoundCount(0);
		setIsGameOver(false);
		setSelectedBoxes([]);
		setPreviouslySelectedBox(null);
		initializeGame();
	};

	const initializeGame = () => {
		const colors = getUniqueColors();
		const colorBoxes = [];
		const pairs = makePairs(flatBoxData.map((_, index) => index));
		for (let i = 0; i < colors.length; i++) {
			colorBoxes.push({ color: colors[i], boxes: pairs[i] });
		}
		setColorBoxData(colorBoxes);
	};

	useEffect(() => {
		initializeGame();
	}, []);

	return (
		<>
			<button
				className="w-max px-4 py-2 border-2 border-black dark:border-white"
				onClick={resetGame}
			>
				Reset Game
			</button>
			<div className="flex flex-wrap gap-[10px] w-[350px] relative">
				{isGameOver ? (
					<div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#99999999]">
						<div className="flex flex-col items-center justify-center h-full">
							<strong className="text-2xl font-bold">Game Over</strong>
							<p>You win the game in {roundCount} rounds</p>
						</div>
					</div>
				) : null}
				{flatBoxData.map((_, boxIndex) => (
					<div
						key={boxIndex}
						onClick={() => handleBoxClick(boxIndex)}
						style={
							[...selectedBoxes, previouslySelectedBox].includes(boxIndex)
								? {
										backgroundColor: `#${getBoxColor(boxIndex)}`,
										border: `2px solid #${getBoxColor(boxIndex)}`,
								  }
								: {}
						}
						className={cn(
							'transition-all duration-300 w-[80px] h-[80px] border-2 border-black dark:border-white',
							pauseGame ? 'cursor-not-allowed' : ''
						)}
					></div>
				))}
			</div>
		</>
	);
};

export default ColorMemory;
