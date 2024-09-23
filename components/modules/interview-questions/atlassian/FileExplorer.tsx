'use client';
import { useState } from 'react';
import { AiFillFolder } from 'react-icons/ai';
import { FaFile } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
const FileExplorer = () => {
	const [explorer, setExplorer] = useState([]);
	const [explorerOpen, setExplorerOpen] = useState(false);
	return (
		<section className="bg-black p-3 max-w-[400px] text-white">
			<div className="p-1 border header flex items-center justify-between">
				<div
					className="cursor-pointer flex items-center gap-1"
					onClick={() => setExplorerOpen(!explorerOpen)}
				>
					{explorerOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
					<h1>File Explorer</h1>
				</div>
				<div className="flex items-center gap-1">
					<FaFile
						className="cursor-pointer"
						onClick={() => setExplorer([])}
					/>
					<AiFillFolder className="cursor-pointer" />
				</div>
			</div>
			{explorerOpen && explorer.length > 0 ? (
				<div className="explorers border">
					{explorer.map((item) => (
						<div
							className="explorer"
							key={item}
							onClick={() => setExplorer([...explorer, item])}
						>
							{item}
						</div>
					))}
				</div>
			) : (
				<div className="border text-sm text-center p-2 border-t-0">
					No Folder Found
				</div>
			)}
		</section>
	);
};

export default FileExplorer;
