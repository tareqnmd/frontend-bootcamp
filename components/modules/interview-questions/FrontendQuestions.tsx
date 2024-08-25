import { frontendQuestionOptions } from '@/lib/menu';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

const FrontendQuestions = async () => {
	const t = await getTranslations('Navbar');
	const frontendTopMenus = t.raw('frontendTopMenus');
	return (
		<div className="grid gap-2">
			<strong className="text-xl border-b border-black">
				{frontendTopMenus.title}
			</strong>
			<ul className="grid grid-cols-auto-fit-min grid-flow-dense gap-2">
				{frontendQuestionOptions.map((option) => (
					<li
						key={option.key}
						className="rounded-full bg-green-400 flex"
					>
						<Link
							key={option.href}
							href={option.href}
							className="w-full text-center text-[14px] text-white p-[6px_12px] txt-sm leading-[14px]"
						>
							{frontendTopMenus[option.key]}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FrontendQuestions;
