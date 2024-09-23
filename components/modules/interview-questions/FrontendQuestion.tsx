import { htmlParse } from '@/lib/common';
import { capitalize } from '@/lib/utils';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

const FrontendQuestion = async ({ question }: { question: any }) => {
	const t = await getTranslations('Basic');
	const { title, question_link, tags } = question;
	return (
		<div className="flex flex-col gap-2 sm:gap-4 mb-4">
			<Link
				className="hidden w-max"
				href={question_link}
				target="_blank"
			>
				{t('external_question')}
			</Link>
			<strong className="text-xl sm:text-2xl">{title}</strong>
			<div
				className="question-description"
				dangerouslySetInnerHTML={htmlParse(question.description)}
			/>
			<div className="flex flex-wrap items-center gap-2">
				{tags?.map((tag: string) => (
					<span
						key={tag}
						className="bg-secondary dark:bg-[#282c33] text-dark dark:text-light rounded-full px-3 py-1 text-sm font-semibold"
					>
						{capitalize(tag)}
					</span>
				))}
			</div>
		</div>
	);
};

export default FrontendQuestion;
