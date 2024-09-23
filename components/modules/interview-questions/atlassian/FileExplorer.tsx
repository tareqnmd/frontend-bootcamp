'use client';
import { useState } from 'react';
import { AiFillDelete, AiFillFolder } from 'react-icons/ai';
import { FaFile } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdModeEditOutline } from 'react-icons/md';
type Explorer = {
	type: string;
	name: string;
	edit: boolean;
	children?: Explorer[];
};

const FileExplorer = () => {
	const [explorer, setExplorer] = useState<Explorer[]>([]);
	const [explorerOpen, setExplorerOpen] = useState(false);

	const addFile = (type: string) => {
		const newExplorer: Explorer = { type, name: '', edit: true };
		if (type === 'folder') {
			newExplorer.children = [];
		}
		setExplorer((prev) => [...prev, newExplorer]);
	};

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
						onClick={() => addFile('file')}
					/>
					<AiFillFolder
						className="cursor-pointer"
						onClick={() => addFile('folder')}
					/>
				</div>
			</div>
			{explorerOpen ? (
				explorer.length > 0 ? (
					<div className="explorers border border-t-0 p-2">
						{explorer?.map((item, index) => (
							<div
								className="explorer flex items-center justify-between gap-2 p-1"
								key={index}
							>
								<div className="flex items-center gap-1">
									{item.type === 'file' ? <FaFile /> : <AiFillFolder />}
									{item.edit ? (
										<input
											className="h-[16px] rounded-sm"
											type="text"
										/>
									) : (
										item.name
									)}
									{/* {item.children.length > 0 ? null : null} */}
								</div>
								<div className="actions flex items-center gap-1">
									<MdModeEditOutline />
									{item.type === 'folder' ? (
										<>
											<AiFillFolder />
											<FaFile />
										</>
									) : null}
									<AiFillDelete />
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="border text-sm text-center border-t-0 p-2">
						No Folder Found
					</div>
				)
			) : null}
		</section>
	);
};

export default FileExplorer;
