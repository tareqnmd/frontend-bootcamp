import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Footer = () => {
	const t = useTranslations('Footer');
	return (
		<footer className="bg-secondary">
			<div className="container flex items-center justify-between flex-col sm:flex-row py-[20px] gap-2">
				<Link
					className="text-xl font-bold"
					href="/"
				>
					Home
				</Link>
				<p>{t('copyright')}</p>
			</div>
		</footer>
	);
};

export default Footer;
