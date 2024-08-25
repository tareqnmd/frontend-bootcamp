import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

const FrontendQuestion = async ({ question }: { question: string }) => {
	const t = await getTranslations('Basic');
	return (
		<li>
			<Link
				className="text-blue-700 border-b border-blue-700"
				href={question}
				target="_blank"
			>
				{t('question')}
			</Link>
		</li>
	);
};

export default FrontendQuestion;
