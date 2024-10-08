import { useTranslations } from 'next-intl';

const Footer = () => {
	const t = useTranslations('Footer');
	return (
		<footer className="border-t dark:border-[#444]">
			<div className="container flex items-center justify-center py-[20px]">
				<p>{t('copyright')}</p>
			</div>
		</footer>
	);
};

export default Footer;
