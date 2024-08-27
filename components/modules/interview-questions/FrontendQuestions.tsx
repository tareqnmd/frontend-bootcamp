import { frontendQuestionOptions } from '@/lib/menu';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

const FrontendQuestions = async () => {
	const t = await getTranslations('InterviewQuestions');
	return (
		<ul className="h-full place-content-center flex flex-wrap items-center gap-2">
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
						{t(option.key)}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default FrontendQuestions;
