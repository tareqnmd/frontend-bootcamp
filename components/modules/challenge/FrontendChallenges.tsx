import { challenges } from '@/lib/module/challenge';
import Link from 'next/link';

const FrontendChallenges = () => {
	return (
		<ul className="h-full place-content-center flex flex-wrap items-center gap-2">
			{challenges.map((option) => (
				<li
					key={option.key}
					className="border border-black dark:border-white flex"
				>
					<Link
						key={option.href}
						href={option.href}
						className="w-full text-center text-[14px] p-[6px_12px] txt-sm leading-[14px]"
					>
						{option.label}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default FrontendChallenges;
