import { frontendQuestionOptions } from '@/lib/menu';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

const FrontendQuestions = async () => {
	const t = await getTranslations('Navbar');
	const frontendTopMenus = t.raw('frontendTopMenus');
	return (
		<ul className="flex items-center gap-2">
			{frontendQuestionOptions.map((option) => (
				<li key={option.key}>
					<Link
						key={option.href}
						href={option.href}
						className="rounded-full bg-green-400 text-[14px] text-white p-[4px_12px] txt-sm leading-[14px]"
					>
						{frontendTopMenus[option.key]}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default FrontendQuestions;
