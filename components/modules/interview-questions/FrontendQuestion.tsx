import { htmlParse } from '@/lib/common';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

const FrontendQuestion = async ({ question }: { question: any }) => {
	const t = await getTranslations('Basic');
	const { title, question_link, tags } = question;
	return (
		<div className="flex flex-col gap-2 mb-4">
			<Link
				className="text-blue-700 border-b border-blue-700 w-max"
				href={question_link}
				target="_blank"
			>
				{t('external_question')}
			</Link>
			<strong className="text-2xl">{title}</strong>
			<div dangerouslySetInnerHTML={htmlParse(question.description)} />
			<div>
				{tags?.map((tag: string) => (
					<span
						key={tag}
						className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	);
};

export default FrontendQuestion;
