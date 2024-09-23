'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BreadCrumbs = () => {
	const pathName = usePathname();
	const pathArray = pathName.split('/').filter((x) => x);
	const getPath = (path: string) => path.split('-').join(' ');
	const getHref = (index: number) =>
		index === pathArray.length - 1
			? ''
			: '/' + pathArray.slice(0, index + 1).join('/');

	return pathArray.length > 1 ? (
		<nav className="text-xs sm:text-sm bg-secondary dark:bg-[#282c33] text-dark dark:text-light mb-1 py-2 px-2 sm:px-4 rounded transition-all">
			<ol className="flex items-center gap-1">
				{pathArray?.map((path, index) => {
					return (
						<li
							className="flex items-center gap-1"
							key={index}
						>
							{index !== 0 && <span className="text-md">/</span>}
							{index === pathArray.length - 1 ? (
								<span className="capitalize">{getPath(path)}</span>
							) : (
								<Link
									href={getHref(index)}
									className="capitalize hover:font-semibold"
								>
									{getPath(path)}
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
