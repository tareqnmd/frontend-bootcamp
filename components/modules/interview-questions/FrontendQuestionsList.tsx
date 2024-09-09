import { InterviewQuestionType } from '@/types/interview-questions';
import Link from 'next/link';

const FrontendQuestionsList = ({
	menus,
	title,
}: {
	menus: InterviewQuestionType[];
	title: string;
}) => {
	return (
		<div className="grid gap-2">
			<strong className="text-xl border-b border-black dark:border-white">
				{title}
			</strong>
			<ul className="grid gap-4">
				{menus.map((menu, index) => (
					<li
						key={menu.key}
						className="flex items-center gap-1"
					>
						<span>{index + 1}.</span>
						<Link
							key={menu.href}
							href={menu.href}
							className="text-sm text-blue-700 underline"
						>
							{menu.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FrontendQuestionsList;
