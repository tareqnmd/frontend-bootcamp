'use client';
import { capitalize } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BreadCrumbs = () => {
	const pathName = usePathname();
	const pathArray = pathName.split('/').filter((x) => x);

	return pathArray.length > 1 ? (
		<nav className="text-xs sm:text-sm bg-secondary dark:bg-[#282c33] text-dark dark:text-light mb-1 py-2 px-2 sm:px-4 rounded transition-all">
			<ol className="flex items-center gap-1">
				{pathArray.map((path, index) => {
					const href = '/' + pathArray.slice(0, index + 1).join('/');
					return (
						<li
							className="flex items-center gap-1"
							key={index}
						>
							{index !== 0 && <span className="text-md">/</span>}
							{index === pathArray.length - 1 ? (
								<span>{capitalize(path.split('-').join(' '))}</span>
							) : (
								<Link
									href={index === pathArray.length - 1 ? '' : href}
									className="hover:font-semibold"
								>
									{capitalize(path.split('-').join(' '))}
								</Link>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	) : null;
};

export default BreadCrumbs;
